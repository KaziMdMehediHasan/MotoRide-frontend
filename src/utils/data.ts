import alice from '../assets/alice-johnson.webp'
import jane from '../assets/jane-smith.jpg'
import john from '../assets/john-doe.jpg'

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
// const Testimonials: React.FC = () => {
//     return (
//         <div className= "flex justify-around" >
//         {
//             testimonials.map((testimonial, index) => (
//                 <TestimonialCard key= { index } { ...testimonial } />
//       ))
//         }
//         </div>
//   );
// };