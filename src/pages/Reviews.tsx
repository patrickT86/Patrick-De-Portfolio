import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ReviewCard } from "@/components/ReviewCard";

const reviews = [
  {
    content: "Patrick is an exceptional engineer who consistently delivers high-quality code. His ability to architect complex systems while keeping them maintainable is remarkable. He was instrumental in building our AI-driven recommendation engine.",
    author: "Michael Chen",
    role: "Engineering Director",
    company: "Wayfair",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content: "Working with Patrick was a game-changer for our team. His deep understanding of both frontend and backend technologies allowed us to move fast without sacrificing code quality. He's also an excellent mentor.",
    author: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "Demand-IQ",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    content: "Patrick's technical expertise and leadership skills are second to none. He led the development of our real-time analytics dashboard, delivering it ahead of schedule with exceptional performance.",
    author: "David Park",
    role: "VP of Engineering",
    company: "Tesla",
    avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    content: "I had the pleasure of working with Patrick on several healthcare projects. His attention to security, compliance, and scalability made him an invaluable asset to our team.",
    author: "Dr. Emily Rodriguez",
    role: "CTO",
    company: "Presidium Health Corp",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    content: "Patrick is a brilliant full-stack engineer with a rare ability to understand complex AI systems and translate them into user-friendly applications. His work on our enterprise dashboards was outstanding.",
    author: "James Liu",
    role: "Principal Engineer",
    company: "C3 AI",
    avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    content: "Patrick combines technical excellence with great communication skills. He's always willing to help others and share his knowledge. Any team would be lucky to have him.",
    author: "Amanda Foster",
    role: "Engineering Manager",
    company: "Wayfair",
    avatarUrl: "https://randomuser.me/api/portraits/women/26.jpg",
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