import alice from '../assets/alice-johnson.webp'
import jane from '../assets/jane-smith.jpg'
import john from '../assets/john-doe.jpg'
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
]

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

]

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
]