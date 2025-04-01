import Footer from "./_components/layout/Footer";
import Header from "./_components/layout/Header";
import Cars from "./_components/sections/Cars";
import Entrance from "./_components/sections/Entrance";
import Promotion from "./_components/sections/Promotion";
import Marketing from "./_components/sections/Marketing";

export default function Home() {
  return (
    <div className="">
      <Entrance />
      <Promotion />
      <Cars />
      <Marketing />
    </div>
  );
}
