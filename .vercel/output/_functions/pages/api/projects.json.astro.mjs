import { d as getFeaturedProjects, e as getAllProjects } from '../../chunks/db_CHwBRfvz.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  try {
    const featured = url.searchParams.get("featured") === "true";
    let projects;
    if (featured) {
      projects = await getFeaturedProjects();
    } else {
      projects = await getAllProjects();
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: projects,
        count: projects.length
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
        error: "Failed to fetch projects",
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
