import Sidebar from "@/components/Admin/Sidebar";
import Header from "@/components/Admin/Header";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
        <Header/>

        <div className="container-fluid">
        <div className="row">
            <Sidebar/>

            <main className="col-md-9 ms-sm-auto col-lg-10 mt-4 px-md-4">
            {children}
            </main>
        </div>
        </div>
    </>
 
  );
}