import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Education from "./components/Education"
import SelectedWorks from "./components/SelectedWorks";
import Certifications from "./components/Certifications";
import ProjectsGrid, { type Project } from "./components/ProjectsGrid";
import ContactSection from "./components/ContactSection";
import { TechStackBadges } from "./components/Skills";
import FreelanceProjects from "./components/FreelanceProjects";

const projects: Project[] = [
  {
    id: "checkmate",
    title: "CheckMate",
    date: "2025",
    icon: "01",
    liveUrl: "https://checkmate-dhruv.vercel.app/",
    description:
      "Real-time chess platform with live WebRTC video chat and WebSocket-based game state synchronization, designed for low-latency play.",
    features: [
      { text: "Live multiplayer gameplay with synchronized board state." },
      { text: "WebRTC video sessions embedded directly into each match." },
      { text: "Scalable Node.js backend for high-concurrency game rooms." },
    ],
    tags: [
      { label: "React" },
      { label: "WebRTC" },
      { label: "WebSockets" },
      { label: "Node.js" },
    ],
  },
  {
    id: "muzique",
    title: "Muzique",
    date: "2025",
    icon: "02",
    liveUrl: "https://github.com/Dhruvp132/Muzique",
    description:
      "Collaborative SaaS music platform featuring real-time queue voting, subscription flows, and robust data modeling.",
    features: [
      { text: "Shared queue collaboration with instant vote updates." },
      { text: "Stripe-based subscription and payment handling." },
      { text: "Relational data workflows powered by Prisma and PostgreSQL." },
    ],
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Prisma" },
      { label: "PostgreSQL" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "03",
    liveUrl: "https://algoviz-dhruv.vercel.app/",
    description:
      "Interactive algorithm visualizer for core sorting and graph algorithms with clear step-by-step visual feedback.",
    features: [
      { text: "Pathfinding demos for Dijkstra, DFS, and BFS." },
      { text: "Sorting demos for Merge, Quick, and Bubble sort." },
      { text: "Real-time animation controls for educational pacing." },
    ],
    tags: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col text-wrap">
      <Hero />
      <Overview />
      <FreelanceProjects />
      <section id="skills" className="section-surface w-full py-24 text-white">
        <div className="section-inner">
          <TechStackBadges />
        </div>
      </section>
      <SelectedWorks />
      <div className="section-surface w-full py-24">
        <div className="section-inner">
          <ProjectsGrid projects={projects} />
        </div>
      </div>
      <Education />
      <Certifications />
      <ContactSection />
    </main>
  )
}
