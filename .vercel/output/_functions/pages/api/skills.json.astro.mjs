import { f as getFeaturedSkills, h as getSkillsByCategory, i as getSkillsByLevel, j as getAllSkills } from '../../chunks/db_CHwBRfvz.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  try {
    const featured = url.searchParams.get("featured") === "true";
    const category = url.searchParams.get("category");
    const level = url.searchParams.get("level");
    let skills;
    if (featured) {
      skills = await getFeaturedSkills();
    } else if (category) {
      skills = await getSkillsByCategory(category);
    } else if (level) {
      skills = await getSkillsByLevel(level);
    } else {
      skills = await getAllSkills();
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: skills,
        count: skills.length,
        filters: {
          featured: featured || false,
          category: category || null,
          level: level || null
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch skills",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
