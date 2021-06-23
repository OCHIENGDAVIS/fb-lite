import StoryCard from './StoryCard';
const stories = [
  {
    name: 'Davis Ochieng',
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  );
}

export default Stories;
