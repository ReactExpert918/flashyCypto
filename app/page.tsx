import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col bg-landing items-center justify-between gap-100 ">
      <div className='w-full border-none h-nav'>
        <Navbar />
      </div>
      <main className='pt-300 w-full mt-20'>
        <Main />
      </main>
      <footer className='w-full mt-20'></footer>
    </section>
  )
}
