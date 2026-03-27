import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, User, ChevronLeft, Facebook, Twitter } from 'lucide-react'

// Blog data structure
interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

const Blog = () => {
  const { blogId } = useParams()
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [blogs, setBlogs] = useState<BlogPost[]>([])

  // Blog data from sculptderma.com
  const blogData: BlogPost[] = [
    {
      id: 'liposuction-what-it-is-surgery-recovery-results',
      title: 'Liposuction: What It Is, Surgery, Recovery & Results',
      excerpt: 'Liposuction is a cosmetic fat removal procedure. Liposuction helps get rid of fat deposits that don\'t respond to diet and exercise.',
      content: `
        <h2>What is Liposuction?</h2>
        <p>Liposuction is a cosmetic surgery procedure that removes unwanted fat deposits from your body. If you've tried diet and exercise, but the fat won't budge, liposuction can help. The procedure gives you a smoother body shape. Liposuction surgery isn't a weight-loss procedure.</p>
        
        <h2>Where on my body can I get liposuction?</h2>
        <ul>
          <li><strong>Stomach or waist.</strong> Common area for both men and women seeking a slimmer midsection.</li>
          <li><strong>Back or chest.</strong> Ideal for removing stubborn fat deposits that create bulk.</li>
          <li><strong>Face, cheeks, chin or neck.</strong> Perfect for facial contouring and defining jawlines.</li>
        </ul>
        
        <h2>The Liposuction Procedure</h2>
        <p>The procedure involves making small incisions in the target area and inserting a thin tube called a cannula. The cannula is connected to a vacuum that suctions out fat from specific areas of the body.</p>
        
        <h2>Recovery Process</h2>
        <p>Recovery from liposuction typically takes 1-2 weeks. You'll need to wear compression garments for several weeks to help reduce swelling and support your new body contours. Most patients can return to work within a week.</p>
        
        <h2>Expected Results</h2>
        <p>You'll notice immediate results, though final results may take several months to become fully apparent as swelling subsides. The results are permanent as long as you maintain a stable weight.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 13, 2025',
      readTime: '5 min read',
      category: 'Treatments & Procedures',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Liposuction', 'Surgical', 'Body Contouring', 'Fat Removal']
    },
    {
      id: 'sculpting-beauty-the-art-of-face-and-body-contouring',
      title: 'Sculpting Beauty: The Art of Face and Body Contouring',
      excerpt: 'Our face is our first impression, and many begin down the path of surgical or non-surgical facial contouring to finally achieve the look they have in their mind\'s eye.',
      content: `
        <h2>The Art of Facial Contouring</h2>
        <p>Our face is our first impression, and many begin down the path of surgical or non-surgical facial contouring to finally achieve the look they have in their mind's eye. Facial contouring can enhance your natural features and create harmony in your facial structure.</p>
        
        <h2>Our Clinic is a European Quality Standard</h2>
        <p>On your first visit to clinic, you will receive a consultation with a specialist.</p>
        
        <h2>Services of the Highest Quality</h2>
        <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
        
        <h2>Surgical Facial Contouring Options</h2>
        <ul>
          <li><strong>Rhinoplasty:</strong> Reshaping the nose for better facial balance</li>
          <li><strong>Chin Augmentation:</strong> Enhancing jawline definition</li>
          <li><strong>Cheek Implants:</strong> Adding volume to create more prominent cheekbones</li>
          <li><strong>Neck Lift:</strong> Reducing sagging skin in the neck area</li>
        </ul>
        
        <h2>Non-Surgical Alternatives</h2>
        <p>For those not ready for surgery, non-surgical options include dermal fillers, Botox, and thread lifts that can provide subtle enhancements with minimal downtime.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Inspiration',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Facial Contouring', 'Body Sculpting', 'Aesthetic Surgery', 'Non-Surgical']
    },
    {
      id: 'best-skin-treatments-for-tight-and-glowing-skin',
      title: 'Best Skin Treatments for Tight and Glowing Skin',
      excerpt: 'It\'s important to take care of your skin so that it can continue to take care of us. In this article we will share the secrets of beautiful facial skin.',
      content: `
        <h2>Achieving Radiant Skin</h2>
        <p>Glowing, tight skin is a universal sign of health and youth. Modern aesthetic medicine offers numerous treatments to help you achieve your best skin ever.</p>
        
        <h2>Aesthetic Medicine Quiz</h2>
        <p>Please complete all questions. Mark the best answer from the choices given.</p>
        
        <h2>Top Skin Tightening Treatments</h2>
        <ul>
          <li><strong>Laser Resurfacing:</strong> Stimulates collagen production for tighter skin</li>
          <li><strong>RF Therapy:</strong> Uses radiofrequency to heat deep skin layers</li>
          <li><strong>Ultrasound Therapy:</strong> Lifts and tightens without surgery</li>
          <li><strong>Microneedling:</strong> Creates controlled micro-injuries for skin renewal</li>
        </ul>
        
        <h2>Skin Brightening Solutions</h2>
        <p>For that coveted glow, consider chemical peels, vitamin C treatments, and hydrating facials that nourish your skin from within.</p>
        
        <h2>Combination Approaches</h2>
        <p>Often, the best results come from combining multiple treatments tailored to your specific skin type and concerns.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 11, 2025',
      readTime: '4 min read',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Skin Care', 'Laser Treatment', 'Skin Tightening', 'Glowing Skin']
    },
    {
      id: 'top-5-benefits-of-laser-facial-resurfacing-rejuvenation',
      title: 'Top 5 Benefits of Laser Facial Resurfacing & Rejuvenation',
      excerpt: 'Laser rejuvenation belongs to radical methods, but still does not imply such serious intervention as with a scalpel. The penetration of the beam helps to combat wrinkles, acne, pigmentation or scars.',
      content: `
        <h2>What is Laser Facial Resurfacing?</h2>
        <p>Laser facial resurfacing is a cosmetic procedure that uses concentrated beams of light to improve skin appearance. It addresses various skin concerns including wrinkles, scars, and uneven skin tone.</p>
        
        <h2>How Does a Laser Work?</h2>
        <p>The laser beam penetrates the skin layers to stimulate collagen production and remove damaged skin cells, revealing fresher, younger-looking skin underneath.</p>
        
        <h2>How to Prepare For Laser Resurfacing?</h2>
        <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.</p>
        
        <h2>Top 5 Benefits</h2>
        
        <h3>1. Wrinkle Reduction</h3>
        <p>Laser treatments stimulate collagen production, which naturally fills in fine lines and wrinkles for smoother skin.</p>
        
        <h3>2. Scar Improvement</h3>
        <p>Both acne scars and surgical scars can be significantly reduced through laser resurfacing, creating more even skin texture.</p>
        
        <h3>3. Skin Tightening</h3>
        <p>The heat from laser treatments promotes collagen and elastin production, naturally tightening loose skin.</p>
        
        <h3>4. Pigmentation Correction</h3>
        <p>Age spots, sun damage, and uneven pigmentation can be effectively treated for a more uniform complexion.</p>
        
        <h3>5. Minimal Downtime</h3>
        <p>Modern laser treatments offer impressive results with significantly less recovery time compared to traditional surgical procedures.</p>
        
        <h2>What are The Disadvantages of the Procedure?</h2>
        <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 10, 2025',
      readTime: '5 min read',
      category: 'Inspiration',
      image: 'https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg',
      tags: ['Laser Treatment', 'Facial Rejuvenation', 'Skin Resurfacing', 'Anti-aging']
    },
    {
      id: 'mesotherapy-procedure-side-effects-and-more',
      title: 'Mesotherapy: Procedure, Side Effects, and More',
      excerpt: 'Mesotherapy, performed by a skilled master, can help in almost all complex cosmetic situations: from treating problem skin to burning fat in certain places.',
      content: `
        <h2>What is Mesotherapy?</h2>
        <p>Mesotherapy is a minimally invasive procedure that uses micro-injections of pharmaceutical and homeopathic preparations, plant extracts, vitamins, and other ingredients to rejuvenate and tighten skin.</p>
        
        <h2>Why Is Mesotherapy Effective?</h2>
        <ul>
          <li>The European languages are members of the same family. Their separate existence is a myth.</li>
          <li>Europe uses the same vocabulary.</li>
          <li>The languages only differ in their grammar, their pronunciation and their most common words.</li>
        </ul>
        
        <h2>Innovations in Cosmetology</h2>
        <ul>
          <li>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</li>
          <li>If several languages coalesce, the grammar of the resulting language is more simple and regular.</li>
        </ul>
        
        <h2>Hair Mesotherapy: Started to Grow</h2>
        <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
        
        <h2>Avoid Sauna and Hot Showers</h2>
        <p>Avoid Sauna and Hot Showers. The European languages are members of the same family. Their separate existence is a myth.</p>
        
        <h2>Apply Moisturizer Daily</h2>
        <p>Apply Moisturizer Daily. The new common language will be more simple and regular than existing European languages.</p>
        
        <h2>Use Sunscreen Every Day</h2>
        <p>Use Sunscreen Every Day. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 8, 2025',
      readTime: '6 min read',
      category: 'Tips',
      image: 'https://images.pexels.com/photos/5938568/pexels-photo-5938568.jpeg',
      tags: ['Mesotherapy', 'Non-Surgical', 'Skin Rejuvenation', 'Minimally Invasive']
    },
    {
      id: 'how-to-keep-your-skin-hydrated-with-10-simple-tips',
      title: 'How To Keep Your Skin Hydrated? (With 10 Simple Tips)',
      excerpt: 'A dermatologist at the Center for Aesthetic Medicine told and showed how to properly prepare the face and the entire body for tanning.',
      content: `
        <h2>The Importance of Skin Hydration</h2>
        <p>Proper skin hydration is essential for maintaining a healthy, glowing complexion. Well-hydrated skin appears plumper, smoother, and more youthful.</p>
        
        <h2>Care For Face and Neck Before Tanning</h2>
        <p>The new common language will be more simple and regular than existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
        
        <h2>Innovations in Cosmetology</h2>
        <ul>
          <li>Reducing waste is an important part of mindful consumption.</li>
          <li>Reusing and repurposing items is another way to practice mindful consumption.</li>
          <li>Recycling is a key component of mindful consumption.</li>
          <li>Mindful shopping is about making informed choices when it comes to purchasing new items.</li>
        </ul>
        
        <h2>Our Clinic is a European Quality Standard</h2>
        <p>On your first visit to clinic, you will receive a consultation with a specialist.</p>
        
        <h2>10 Simple Tips for Hydrated Skin</h2>
        
        <h3>1. Drink Plenty of Water</h3>
        <p>Aim for at least 8 glasses of water daily. Hydration starts from within.</p>
        
        <h3>2. Use a Gentle Cleanser</h3>
        <p>Harsh cleansers strip natural oils. Opt for pH-balanced, hydrating formulas.</p>
        
        <h3>3. Apply Moisturizer to Damp Skin</h3>
        <p>Lock in moisture by applying moisturizer within 3 minutes of bathing.</p>
        
        <h3>4. Use Humidifiers</h3>
        <p>Especially important in dry climates or during winter months.</p>
        
        <h3>5. Avoid Hot Showers</h3>
        <p>Hot water strips natural oils. Use lukewarm water instead.</p>
        
        <h3>6. Incorporate Hyaluronic Acid</h3>
        <p>This powerhouse ingredient holds 1000x its weight in water.</p>
        
        <h3>7. Eat Water-Rich Foods</h3>
        <p>Cucumber, watermelon, and oranges contribute to overall hydration.</p>
        
        <h3>8. Limit Alcohol and Caffeine</h3>
        <p>Both can dehydrate your skin and body.</p>
        
        <h3>9. Use Overnight Masks</h3>
        <p>These provide intense hydration while you sleep.</p>
        
        <h3>10. Protect Your Skin Barrier</h3>
        <p>Use products with ceramides and niacinamide to maintain barrier function.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 7, 2025',
      readTime: '7 min read',
      category: 'Tips',
      image: 'https://images.pexels.com/photos/6977864/pexels-photo-6977864.jpeg',
      tags: ['Skin Care', 'Hydration', 'Tips', 'Healthy Skin']
    },
    {
      id: 'choosing-the-best-filler-type-for-each-treatment-area',
      title: 'Choosing Best Filler Type for Each Treatment Area',
      excerpt: 'Lip fillers are more popular today than ever before, thanks to the ease of the procedure and affordable price.',
      content: `
        <h2>Understanding Dermal Fillers</h2>
        <p>Different facial areas require different types of dermal fillers. Learn how to choose the best filler for optimal results.</p>
        
        <h2>Precision and Gentle Medicine</h2>
        <p>When purchasing lip fillers, factors to consider include reputation of brand, experience of other doctors, and quality of product. Not all brands and medications work the same or produce the same results.</p>
        
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
        
        <h2>Lip Fillers</h2>
        <p>Lip fillers are more popular today than ever before, thanks to the ease of the procedure and affordable price.</p>
        
        <h2>Treatment Areas</h2>
        <ul>
          <li><strong>Lips:</strong> Different formulations for volume and definition</li>
          <li><strong>Cheeks:</strong> Thicker fillers for lifting and contouring</li>
          <li><strong>Nasolabial folds:</strong> Medium-density fillers for smile lines</li>
          <li><strong>Under eyes:</strong> Thinner, more fluid fillers for delicate areas</li>
        </ul>
        
        <h2>Choosing the Right Filler</h2>
        <p>Consult with our experts to determine which filler type is best suited for your specific treatment area and aesthetic goals.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 5, 2025',
      readTime: '5 min read',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Dermal Fillers', 'Lip Fillers', 'Facial Aesthetics', 'Non-Surgical']
    },
    {
      id: 'after-aesthetic-treatment-what-matters-most',
      title: 'After Aesthetic Treatment: What Matters Most?',
      excerpt: 'In this article we will talk about how to properly care for your skin after aesthetic procedures, as well as how to choose moisturizing skin care.',
      content: `
        <h2>Skin Care After Solarium</h2>
        <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.</p>
        
        <h2>Types of Home Peeling</h2>
        
        <h3>Do Not Rub Injection Sites</h3>
        <p>Do Not Rub Injection Sites. The European languages are members of the same family. Their separate existence is a myth.</p>
        
        <h3>Use Soothing Masks</h3>
        <p>Use Soothing Masks. The new common language will be more simple and regular than existing European languages.</p>
        
        <h3>Moisturize Your Skin</h3>
        <p>Moisturize Your Skin. To an English person, it will seem like simplified English.</p>
        
        <h3>Use Cream with SPF 50+</h3>
        <p>Use Cream with SPF 50+. The new common language will be more simple and regular than existing European languages.</p>
        
        <h2>Post-Treatment Care Essentials</h2>
        <ul>
          <li>Avoid direct sun exposure for 48-72 hours</li>
          <li>Use gentle, fragrance-free skincare products</li>
          <li>Keep the treated area clean and moisturized</li>
          <li>Avoid strenuous exercise for 24-48 hours</li>
          <li>Follow specific post-procedure instructions provided</li>
        </ul>
        
        <h2>When to Contact Your Provider</h2>
        <p>If you experience excessive swelling, pain, or unusual symptoms, contact our clinic immediately for guidance and support.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 4, 2025',
      readTime: '4 min read',
      category: 'Aesthetics',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Post-Treatment Care', 'Skin Care', 'Aesthetic Medicine', 'Recovery']
    },
    {
      id: '8-ways-to-maintain-a-youthful-appearance',
      title: '8 Ways to Maintain a Youthful Appearance',
      excerpt: 'The aging process can be slowed down and skin youthful for a long time. We will look at factors that we can adjust to maintain youthful skin.',
      content: `
        <h2>Remember, Skin Care Includes:</h2>
        <ul>
          <li>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</li>
          <li>If several languages coalesce, the grammar of the resulting language is more simple and regular.</li>
        </ul>
        
        <h2>When Is a Hardware Cosmetology Session Scheduled?</h2>
        <ul>
          <li><strong>Reduced Carbon Footprint</strong> Environmental impact consideration</li>
          <li><strong>Lower Packaging Waste</strong> Sustainable practices</li>
          <li><strong>Support for Local Agriculture</strong> Community-focused approach</li>
          <li><strong>Circular Economy</strong> Resource efficiency</li>
        </ul>
        
        <h2>8 Ways to Maintain Youthful Appearance</h2>
        
        <h3>1. Daily Sun Protection</h3>
        <p>Use broad-spectrum sunscreen with SPF 30+ every day, even on cloudy days.</p>
        
        <h3>2. Consistent Skincare Routine</h3>
        <p>Cleanse, moisturize, and treat your skin twice daily for optimal results.</p>
        
        <h3>3. Healthy Diet</h3>
        <p>Eat antioxidant-rich foods, stay hydrated, and limit processed foods.</p>
        
        <h3>4. Regular Exercise</h3>
        <p>Boosts circulation and promotes overall skin health and vitality.</p>
        
        <h3>5. Quality Sleep</h3>
        <p>Aim for 7-9 hours of quality sleep to allow skin regeneration.</p>
        
        <h3>6. Stress Management</h3>
        <p>Practice meditation, yoga, or other stress-reducing activities.</p>
        
        <h3>7. Avoid Smoking</h3>
        <p>Smoking accelerates aging and damages skin elasticity.</p>
        
        <h3>8. Regular Professional Treatments</h3>
        <p>Schedule regular aesthetic treatments to maintain and enhance your results.</p>
        
        <h2>Professional Guidance</h2>
        <p>Consult with our experts to create a personalized anti-aging plan tailored to your specific needs and goals.</p>
      `,
      author: 'Dr. Akash Tarkase',
      date: 'January 2, 2025',
      readTime: '6 min read',
      category: 'Inspiration',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Anti-aging', 'Youthful Appearance', 'Skin Care', 'Prevention']
    }
  ]

  useEffect(() => {
    setBlogs(blogData)
    
    if (blogId) {
      const blog = blogData.find(b => b.id === blogId)
      setSelectedBlog(blog || null)
    }
  }, [blogId])

  // Blog listing view
  if (!blogId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden">
          {/* Education/Knowledge Theme Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl"></div>
          </div>
          
          {/* Knowledge/Education Icons */}
          <div className="absolute top-16 left-10 text-primary-200 opacity-20">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
          </div>
          <div className="absolute top-32 right-16 text-accent-200 opacity-20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 text-primary-200 opacity-20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 right-10 text-accent-200 opacity-20">
            <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          
          <div className="relative section-padding py-12">
            <div className="container">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4">
                  <span className="text-primary-700 text-sm font-medium">📚 Expert Insights</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                  Medical Aesthetic
                  <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Blog & Resources</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
                  Discover latest advances in aesthetic medicine, expert tips, and comprehensive guides to help you make informed decisions about your beauty journey.
                </p>
                
                {/* Blog Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                  <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-primary-100">
                    <div className="text-2xl font-bold text-primary-600">150+</div>
                    <div className="text-sm text-gray-600">Expert Articles</div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-accent-100">
                    <div className="text-2xl font-bold text-accent-600">12</div>
                    <div className="text-sm text-gray-600">Categories</div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-primary-100">
                    <div className="text-2xl font-bold text-primary-600">50K+</div>
                    <div className="text-sm text-gray-600">Monthly Readers</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/appointment" className="bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    Book Consultation
                  </Link>
                  <Link to="/services" className="bg-white border-2 border-accent-200 text-accent-600 hover:border-accent-300 hover:bg-accent-50 px-8 py-4 rounded-xl font-bold text-center transition-all duration-300">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Latest
                <span className="text-gradient"> Articles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed with our expert-written articles on aesthetic treatments, skincare, and beauty innovations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <article key={blog.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary-200 group">
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'18\' fill=\'%23666\'%3EImage Not Available%3C/text%3E%3C/svg%3E';
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-semibold rounded-full shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                          #{tag}
                        </span>
                      ))}
                      {blog.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{blog.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Individual blog post view
  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
        {/* Modern Blog Header */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative section-padding">
            <div className="container">
              <nav className="flex items-center text-sm mb-8">
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to Blog
                </Link>
              </nav>
              
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <span className="text-primary-700 text-sm font-medium">{selectedBlog.category}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  {selectedBlog.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  {selectedBlog.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center justify-center text-gray-600 gap-8 text-sm mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedBlog.author}</p>
                      <p className="text-xs text-gray-500">Expert Author</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="section-padding bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="p-8">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                          {selectedBlog.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <button className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors duration-200">
                            <Facebook className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors duration-200">
                            <Twitter className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="prose prose-lg max-w-none text-gray-700 mb-8"
                      dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    />
                    
                    {/* Enhanced Treatment Gallery */}
                    <div className="mt-12 mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Treatment Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden group">
                          <img 
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                            alt="Aesthetic treatment"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.currentTarget;
                              target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'16\' fill=\'%23666\'%3ETreatment Image%3C/text%3E%3C/svg%3E';
                            }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                              Advanced Treatment
                            </span>
                          </div>
                        </div>
                        <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden group">
                          <img 
                            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                            alt="Cosmetic procedure"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.currentTarget;
                              target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'16\' fill=\'%23666\'%3EProcedure Image%3C/text%3E%3C/svg%3E';
                            }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                              Professional Care
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tags and Author Info */}
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedBlog.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full hover:bg-primary-100 transition-colors duration-200">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mr-3">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{selectedBlog.author}</p>
                              <p className="text-sm text-gray-500">{selectedBlog.date}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Share:</span>
                          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                            <Facebook className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors duration-200">
                            <Twitter className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Enhanced Sidebar */}
              <div className="lg:col-span-2">
                {/* Featured Image */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-6">
                  <div className="relative h-80 bg-gray-100">
                    <img 
                      src={selectedBlog.image} 
                      alt={selectedBlog.title}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'20\' fill=\'%23666\'%3EImage Not Available%3C/text%3E%3C/svg%3E';
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                        Featured Treatment
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Book Consultation CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-lg p-6 mb-6 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ready to Transform?</h3>
                    <p className="text-white/90 mb-6 text-sm">Book your consultation with our expert medical team today.</p>
                    <Link 
                      to="/appointment" 
                      className="w-full bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-all duration-300 text-center block shadow-lg"
                    >
                      Schedule Your Visit
                    </Link>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary-600 text-sm">📁</span>
                    </div>
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {Array.from(new Set(blogs.map(blog => blog.category))).map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span>{category}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Related Posts */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-accent-600 text-sm">📝</span>
                    </div>
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {blogs
                      .filter(blog => blog.id !== selectedBlog.id)
                      .slice(0, 3)
                      .map((blog) => (
                        <Link 
                          key={blog.id}
                          to={`/blog/${blog.id}`}
                          className="block p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all duration-200 group border border-transparent hover:border-primary-200"
                        >
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                              <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                  const target = e.currentTarget;
                                  target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'8\' fill=\'%23666\'%3EIMG%3C/text%3E%3C/svg%3E';
                                }}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                                {blog.title}
                              </h4>
                              <p className="text-xs text-gray-500">{blog.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h2>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}

export default Blog
