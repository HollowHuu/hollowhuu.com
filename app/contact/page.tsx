export default function Contact() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <h1 className="text-4xl font-bold">Contact</h1>
          
          {/* Contact box */}
          <div className="flex flex-col justify-center items-center border-2 border-red-500 p-3 rounded bg-black/50 my-5">
              <div className="grid grid-cols-1 gap-4 text-lg">
                  <div>Mail: <a href="mailto:nicolaswk05@gmai.com" className="text-blue-500">nicolaswk05@gmail.com</a></div>
                  <div>Phone: +45 81 80 10 20</div>
              </div>
          </div>
      </main>
    )
  }