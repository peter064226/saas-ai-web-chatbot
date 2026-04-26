"use server";

type BlogPost = {
  id: string;
  title: string;
  image: string;
  content: string;
  createdAt: Date;
};

type BlogPostDetail = BlogPost & {
  author: string;
};

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How AI is Transforming Customer Support in 2025",
    image: "/images/app-ui.png",
    content:
      "<p>Artificial intelligence is revolutionizing the way businesses handle customer support. From instant responses to intelligent escalation, AI chatbots are becoming indispensable tools for modern businesses looking to scale their support operations without sacrificing quality.</p>",
    createdAt: new Date("2025-05-12"),
  },
  {
    id: "2",
    title: "Top 5 Ways to Increase Sales with a Chatbot",
    image: "/images/app-ui.png",
    content:
      "<p>Sales teams are increasingly turning to AI-powered chatbots to qualify leads, answer product questions, and guide prospects through the buying journey — all without human intervention. Here are the top five strategies to get the most out of your chatbot investment.</p>",
    createdAt: new Date("2025-06-03"),
  },
  {
    id: "3",
    title: "Embedding AI into Your Website: A Step-by-Step Guide",
    image: "/images/app-ui.png",
    content:
      "<p>Adding an AI assistant to your website has never been easier. With just a few lines of code, you can give your visitors instant access to answers, product recommendations, and support — available 24/7. This guide walks you through the entire process from setup to deployment.</p>",
    createdAt: new Date("2025-06-20"),
  },
];

const MOCK_AUTHORS: Record<string, string> = {
  "1": "Sarah Mitchell",
  "2": "James Harlow",
  "3": "Priya Nair",
};

export const onGetBlogPosts = async (): Promise<BlogPost[] | undefined> => {
  try {
    return MOCK_POSTS;
  } catch (error) {
    console.log(error);
  }
};

export const onGetBlogPost = async (
  id: string,
): Promise<BlogPostDetail | undefined> => {
  try {
    const post = MOCK_POSTS.find((p) => p.id === id);
    if (!post) return undefined;

    return {
      ...post,
      author: MOCK_AUTHORS[id] ?? "Unknown Author",
    };
  } catch (error) {
    console.log(error);
  }
};
