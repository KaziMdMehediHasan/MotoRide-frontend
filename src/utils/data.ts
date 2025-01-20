import alice from '../assets/alice-johnson.webp';
import jane from '../assets/jane-smith.jpg';
import john from '../assets/john-doe.jpg';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiMotorbikeLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import member1 from '../assets/Team Images/member-1.jpg';
import member6 from '../assets/Team Images/member-6.jpg';
import member2 from '../assets/Team Images/member-2.jpg';
import member3 from '../assets/Team Images/member-3.jpg';
import member4 from '../assets/Team Images/member-4.jpg';
import member5 from '../assets/Team Images/member-5.jpg';

export const testimonials = [
    {
        avatar: john,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere quam sed cursus semper. Mauris ligula mi, pulvinar sit amet posuere at, hendrerit quis magna. Donec facilisis tellus dignissim tincidunt mollis.',
        name: 'John Doe',
        location: 'New York, USA',
        date: 'Jan 1, 2024',
        rating: 5,
    },
    {
        avatar: jane,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere quam sed cursus semper. Mauris ligula mi, pulvinar sit amet posuere at, hendrerit quis magna. Donec facilisis tellus dignissim tincidunt mollis.',
        name: 'Jane Smith',
        location: 'London, UK',
        date: 'Feb 15, 2024',
        rating: 4,
    },
    {
        avatar: alice,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere quam sed cursus semper. Mauris ligula mi, pulvinar sit amet posuere at, hendrerit quis magna. Donec facilisis tellus dignissim tincidunt mollis.',
        name: 'Alice Johnson',
        location: 'Sydney, Australia',
        date: 'Mar 10, 2024',
        rating: 5,
    },
];

export const services = [
    {
        icon: VscWorkspaceTrusted,
        title: "Safety Ensured",
        description: "Get your products delivered quickly and without any extra cost."
    },
    {
        icon: RiMotorbikeLine,
        title: "Always Available",
        description: "Enjoy peace of mind with our comprehensive warranty."
    },
    {
        icon: MdOutlineWorkspacePremium,
        title: "Premium Rides",
        description: "We use only the highest quality materials in our products."
    },

];

export const teamCardData = [
    {
        image: member1,
        title: 'John Doe',
        role: 'CEO',
    },
    {
        image: member2,
        title: 'Michael Jordan',
        role: 'Operations Manager',
    },
    {
        image: member3,
        title: 'Joseph Smith',
        role: 'Executive Director',
    },
    {
        image: member4,
        title: 'Henry Banks',
        role: 'Managing Director',
    },
    {
        image: member5,
        title: 'Alex Goot',
        role: 'Team Leader',
    },
    {
        image: member6,
        title: 'Seth Moeller',
        role: 'Coordinator',
    },
];

export const privacyPolicy = [
    {
        title: "Introduction",
        content: "Welcome to our Bike Rental Service's Privacy Policy. This policy explains how we collect, use, and protect your personal information when you use our bike rental platform."
    },
    {
        title: "Information We Collect",
        content: [
            "Personal identification information (name, email address, phone number)",
            "Payment information (processed securely through Stripe)",
            "Usage data (rental history, bike preferences)",
            "Location data (pickup and drop-off locations)",
            "Device information (IP address, browser type, device type)"
        ]
    },
    {
        title: "How We Use Your Information",
        content: [
            "To process your bike rentals and payments",
            "To communicate with you about your rentals",
            "To improve our services and user experience",
            "To prevent fraud and ensure platform security",
            "To comply with legal obligations"
        ]
    },
    {
        title: "Payment Processing",
        content: "We use Stripe for payment processing. When you make a payment, your payment information is collected and processed directly by Stripe. We do not store your complete payment information on our servers. For more information about how Stripe handles your data, please refer to Stripe's Privacy Policy."
    },
    {
        title: "Data Security",
        content: "We implement appropriate security measures to protect your personal information. This includes encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
        title: "Data Sharing",
        content: "We do not sell your personal information to third parties. We may share your data with:"
    },
    {
        title: "Third-Party Service Providers",
        content: [
            "Payment processors (Stripe)",
            "Cloud storage providers",
            "Analytics services",
            "Customer support tools"
        ]
    },
    {
        title: "Your Rights",
        content: [
            "Access your personal data",
            "Correct inaccurate data",
            "Request deletion of your data",
            "Object to data processing",
            "Export your data"
        ]
    },
    {
        title: "Cookies",
        content: "We use cookies to improve your experience on our platform. These cookies help us understand how you use our service and remember your preferences."
    },
    {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@bikerental.com"
    }
];

export const faqItems = [
    {
        question: "How does the bike rental process work?",
        answer: "The rental process is simple: Choose your bike from our available selection, select your rental duration, and complete the payment through our secure Stripe payment system. You'll receive a confirmation code which you'll show when picking up your bike. When returning, our staff will inspect the bike and complete the rental."
    },
    {
        question: "What documents do I need to rent a bike?",
        answer: "You'll need a valid government-issued photo ID and a credit card for the security deposit. For certain high-performance bikes, we may also require a valid motorcycle license or proof of riding experience."
    },
    {
        question: "How is the payment processed?",
        answer: "We process all payments securely through Stripe. We accept all major credit cards. The full rental amount is charged at the time of booking, and any security deposit is held separately and released after the bike is returned in good condition."
    },
    {
        question: "What happens if I return the bike late?",
        answer: "Late returns are charged at our hourly rate plus a late fee. We recommend contacting us immediately if you think you'll be late. We can often accommodate extensions if arranged in advance."
    },
    {
        question: "Is insurance included in the rental?",
        answer: "Basic insurance is included in all rentals. This covers basic liability and damage. Additional comprehensive coverage is available for purchase. We recommend reviewing our insurance options before renting."
    },
    {
        question: "What if the bike breaks down during my rental?",
        answer: "We provide 24/7 roadside assistance for all our rentals. In case of a breakdown, call our emergency number provided in your rental agreement. We'll either repair the bike on-site or provide a replacement bike if necessary."
    },
    {
        question: "Can I cancel or modify my reservation?",
        answer: "Yes, reservations can be canceled or modified up to 24 hours before the rental start time for a full refund. Cancellations within 24 hours may be subject to a cancellation fee. Modifications are subject to bike availability."
    },
    {
        question: "Do you provide helmets and other safety gear?",
        answer: "Yes, we provide DOT-approved helmets free of charge with all rentals. Additional safety gear such as jackets, gloves, and rain gear is available for rent at an additional cost."
    },
    {
        question: "What is your fuel policy?",
        answer: "Bikes are provided with a full tank of fuel, and should be returned with a full tank. If the bike is not returned with a full tank, a refueling fee will be charged based on current market fuel prices plus a service charge."
    },
    {
        question: "Do you offer long-term rentals?",
        answer: "Yes, we offer weekly and monthly rental packages at discounted rates. Contact our customer service team for long-term rental quotes and availability."
    }
];

export const terms = [
    {
        title: "Agreement to Terms",
        content: "By accessing and using our bike rental service, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you do not have permission to access or use our services."
    },
    {
        title: "Service Description",
        content: [
            "Our platform provides bicycle rental services to registered users",
            "Users must create an account and provide accurate, complete information",
            "We reserve the right to refuse service to anyone for any reason at any time",
            "Service availability may vary by location and time",
            "Rental periods are strictly enforced according to the booking terms"
        ]
    },
    {
        title: "User Responsibilities",
        content: [
            "You must be at least 18 years old to rent a bike",
            "You must provide valid identification and payment information",
            "You are responsible for inspecting the bike before use",
            "You must follow all local traffic laws and safety regulations",
            "You must return the bike in the same condition as received, minus normal wear and tear",
            "You must report any accidents or damages immediately"
        ]
    },
    {
        title: "Payment Terms",
        content: [
            "All payments are processed securely through Stripe",
            "Rental fees must be paid in full at the time of booking",
            "Security deposits may be required and will be refunded upon satisfactory return",
            "Late returns will incur additional charges",
            "Damage fees will be assessed and charged as necessary",
            "All fees are non-refundable unless otherwise specified"
        ]
    },
    {
        title: "Cancellation Policy",
        content: "Cancellations made more than 24 hours before the rental period receive a full refund. Cancellations within 24 hours of the rental period are subject to a cancellation fee. No-shows are charged the full rental amount."
    },
    {
        title: "Liability and Insurance",
        content: [
            "Basic insurance is included with all rentals",
            "Users are responsible for any damages not covered by insurance",
            "We are not liable for injuries resulting from bike use",
            "Users must report accidents within 24 hours",
            "Additional insurance options are available for purchase"
        ]
    },
    {
        title: "Equipment Protection",
        content: "You are responsible for protecting the bike from theft or damage. This includes using provided locks correctly, storing the bike in safe locations, and not leaving it unattended in unsafe areas. Lost or stolen bikes will result in full replacement charges."
    },
    {
        title: "Prohibited Uses",
        content: [
            "No unauthorized modifications to the bike",
            "No use in dangerous or prohibited areas",
            "No commercial use without written permission",
            "No subletting or transferring of rentals",
            "No use under the influence of alcohol or drugs"
        ]
    },
    {
        title: "Termination",
        content: "We reserve the right to terminate your access to the service immediately, without prior notice or liability, for any reason, including breach of Terms. Upon termination, your right to use the service will cease immediately."
    },
    {
        title: "Changes to Terms",
        content: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice before any new terms take effect."
    },
    {
        title: "Governing Law",
        content: "These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions."
    }
];