import alice from '../assets/alice-johnson.webp'
import jane from '../assets/jane-smith.jpg'
import john from '../assets/john-doe.jpg'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiMotorbikeLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md";

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