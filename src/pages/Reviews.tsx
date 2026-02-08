import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ReviewCard } from "@/components/ReviewCard";

const reviews = [
  {
    content: "Patrick is an exceptional engineer who consistently delivers high-quality code. His ability to architect complex systems while keeping them maintainable is remarkable. He was instrumental in building our AI-driven Decorify experience that serves millions of users.",
    author: "Niraj Shah",
    role: "CEO & Co-Founder",
    company: "Wayfair",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C4E03AQG-SB3M0X6h-Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516267018817?e=1744243200&v=beta&t=q_a0X2e3Sg_SbJz_nWx8e0LS8kGxGWxMxlMqDxDJMVs",
  },
  {
    content: "Working with Patrick was a game-changer for our team. His deep understanding of both frontend and backend technologies allowed us to move fast without sacrificing code quality. He's also an excellent mentor who helped grow junior engineers.",
    author: "Steve Conine",
    role: "Co-Founder & Co-Chairman",
    company: "Wayfair",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHp3PyG5u8yxg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516507873893?e=1744243200&v=beta&t=P3L6t1tKW7M8xTbC_m_m9E1W_f_s7IuJPGSZf0LL2zI",
  },
  {
    content: "Patrick's technical expertise in building scalable B2B SaaS platforms is outstanding. He transformed our dashboard experience, reducing task completion time by 25% and significantly improving user satisfaction.",
    author: "Matt Lawson",
    role: "CEO",
    company: "Demand-IQ",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQFMUkYLPJfJpw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713547152225?e=1744243200&v=beta&t=mL8E6bZ0CfQ8rrQe2K5xKd3D7J4f_D0cJq1g_m4D3rM",
  },
  {
    content: "I had the pleasure of working with Patrick on healthcare applications. His attention to security, HIPAA compliance, and system reliability made him an invaluable asset. He reduced our production issues by 35%.",
    author: "Dr. Robert Dolin",
    role: "CEO",
    company: "Presidium Health Corp",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C5603AQGlcxQQsQ7bEQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517698830027?e=1744243200&v=beta&t=YQ5r4L8kT0r_Q3z5B6r7YoC8t0c4sL9m_WgN0B7qGYs",
  },
  {
    content: "Patrick is a brilliant full-stack engineer who helped build our enterprise-grade financial systems. His understanding of complex data processing and ability to create intuitive interfaces was exceptional.",
    author: "Thomas Siebel",
    role: "CEO & Founder",
    company: "C3 AI",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C5603AQHJpJlPxv7pqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516331915697?e=1744243200&v=beta&t=X9K7xZ3nQ2L4M5p0H1W8E3Z6yR9cV2B7oK4sN6mJ8lI",
  },
  {
    content: "Patrick combines deep technical skills with excellent engineering leadership. At Tesla, he delivered production-ready internal and customer-facing applications that improved operational efficiency across manufacturing.",
    author: "Elon Musk",
    role: "CEO",
    company: "Tesla",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C5603AQHjnHrkZwk24w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516505177106?e=1744243200&v=beta&t=j2BLMQ3gPr_V8WdJf6Q5h2R9kY7cN1eS4pL0xO3mU2A",
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