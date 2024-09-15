import Sidebar from "../Sidebar";
import Content from "../Content";
import "../../index.css";
export default function App() {
  return (
    <div className="h-full md:h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col h-screen text-white md:flex-row">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}
