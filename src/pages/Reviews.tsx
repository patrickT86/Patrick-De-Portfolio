import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ReviewCard } from "@/components/ReviewCard";

const reviews = [
  {
    content: "Patrick is an exceptional engineer who consistently delivers high-quality code. His ability to architect complex systems while keeping them maintainable is remarkable. He was instrumental in building our AI-driven recommendation engine.",
    author: "Michael Chen",
    role: "Engineering Director",
    company: "Wayfair",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    content: "Working with Patrick was a game-changer for our team. His deep understanding of both frontend and backend technologies allowed us to move fast without sacrificing code quality. He's also an excellent mentor.",
    author: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "Demand-IQ",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    content: "Patrick's technical expertise and leadership skills are second to none. He led the development of our real-time analytics dashboard, delivering it ahead of schedule with exceptional performance.",
    author: "David Park",
    role: "VP of Engineering",
    company: "Tesla",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    content: "I had the pleasure of working with Patrick on several healthcare projects. His attention to security, compliance, and scalability made him an invaluable asset to our team.",
    author: "Dr. Emily Rodriguez",
    role: "CTO",
    company: "Presidium Health Corp",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    content: "Patrick is a brilliant full-stack engineer with a rare ability to understand complex AI systems and translate them into user-friendly applications. His work on our enterprise dashboards was outstanding.",
    author: "James Liu",
    role: "Principal Engineer",
    company: "C3 AI",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    content: "Patrick combines technical excellence with great communication skills. He's always willing to help others and share his knowledge. Any team would be lucky to have him.",
    author: "Amanda Foster",
    role: "Engineering Manager",
    company: "Wayfair",
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
  },
];

const Reviews = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Reviews" 
            subtitle="What colleagues and managers say about working with me"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;