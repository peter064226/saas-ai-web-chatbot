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
    content: `
      <img src="/images/app-ui.png" alt="AI Customer Support" style="width:100%;border-radius:12px;margin-bottom:24px;" />
      <p>Artificial intelligence is revolutionizing the way businesses handle customer support. From instant responses to intelligent escalation, AI chatbots are becoming indispensable tools for modern businesses looking to scale their support operations without sacrificing quality.</p>
      <p>With natural language processing reaching new heights, chatbots can now understand context, sentiment, and intent — delivering responses that feel genuinely helpful rather than robotic. Businesses that adopt AI-powered support tools report significant reductions in resolution time and increased customer satisfaction scores.</p>
      <p>The key is integration: connecting your AI assistant to your CRM, knowledge base, and ticketing system creates a seamless experience for both customers and support agents. The AI handles the routine, freeing your team to focus on complex, high-value interactions.</p>
    `,
    createdAt: new Date("2025-05-12"),
  },
  {
    id: "2",
    title: "Top 5 Ways to Increase Sales with a Chatbot",
    image: "/images/app-ui.png",
    content: `
      <img src="/images/app-ui.png" alt="Sales Chatbot" style="width:100%;border-radius:12px;margin-bottom:24px;" />
      <p>Sales teams are increasingly turning to AI-powered chatbots to qualify leads, answer product questions, and guide prospects through the buying journey — all without human intervention.</p>
      <p><strong>1. Lead Qualification</strong> — Your chatbot can ask the right questions upfront, scoring leads automatically and routing hot prospects directly to your sales team.</p>
      <p><strong>2. 24/7 Availability</strong> — Never lose a sale because it happened outside business hours. Your AI assistant is always on.</p>
      <p><strong>3. Product Recommendations</strong> — Based on browsing behavior and stated preferences, the chatbot can suggest the most relevant products or plans.</p>
      <p><strong>4. Objection Handling</strong> — Train your bot with your most common objections and their best responses to keep deals moving forward.</p>
      <p><strong>5. Follow-Up Automation</strong> — Automatically re-engage visitors who showed interest but didn't convert, with personalized follow-up messages.</p>
    `,
    createdAt: new Date("2025-06-03"),
  },
  {
    id: "3",
    title: "Embedding AI into Your Website: A Step-by-Step Guide",
    image: "/images/app-ui.png",
    content: `
      <img src="/images/app-ui.png" alt="Embedding AI" style="width:100%;border-radius:12px;margin-bottom:24px;" />
      <p>Adding an AI assistant to your website has never been easier. With just a few lines of code, you can give your visitors instant access to answers, product recommendations, and support — available 24/7.</p>
      <p><strong>Step 1: Create your chatbot</strong> — Sign up, configure your assistant's persona, knowledge base, and escalation rules from the dashboard.</p>
      <p><strong>Step 2: Copy the embed snippet</strong> — Navigate to Settings → Embed and copy the generated script tag.</p>
      <p><strong>Step 3: Paste into your site</strong> — Add the snippet just before the closing body tag on any page where you want the chatbot to appear.</p>
      <p><strong>Step 4: Test and refine</strong> — Use the preview mode to test conversations and fine-tune responses before going live.</p>
      <p>The entire process takes under 10 minutes and requires no backend changes or API integration on your end.</p>
    `,
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
