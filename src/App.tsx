import { useEffect } from "react";

function App() {

  // document.body.classList.add("deep-ocean")
  const changeTheme = (theme: string) => {

    if (theme == "") localStorage.removeItem("theme")

    const classList = document.body.classList;
    document.body.classList.remove(classList.item(0))
    document.body.classList.add(theme)

    localStorage.setItem("theme", theme)
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    document.body.classList.add(theme)
  }, [])


  return (
    <>
      <div className="flex flex-col w-full bg-background h-screen justify-center items-center" >
        <h1 className="text-[100px] tracking-wider  text-foreground " > Theme </h1>
        <div className="flex" >

          <button onClick={() => changeTheme("")} className="flex rounded-md text-foreground opacity-70 font-semibold tracking-wider mx-3" >Nord</button>
          <button onClick={() => changeTheme("deep-ocean")} className="flex rounded-md text-foreground opacity-70 font-semibold tracking-wider mx-3" >Deep Ocean</button>
          <button onClick={() => changeTheme("dark")} className="flex rounded-md text-foreground opacity-70 font-semibold tracking-wider mx-3" >Dark</button>
          <button onClick={() => changeTheme("light")} className="flex rounded-md text-foreground opacity-70 font-semibold tracking-wider mx-3" >Light</button>

        </div>
      </div>

    </>
  )
}

export default App
