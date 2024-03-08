// app.jsx
import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";



function App() {
  const { loading } = useAuth();

  const myStyle3 = {
    background: "linear-gradient(180deg,  rgba(141,217,239,1) 10%, rgba(184,238,215,1) 100%)",
    letterSpacing: '2px',
    lineHeight: '1.2'
  };

  if (loading) {
    return (
      <div className="min-w-[373px] min-h-[816px] overflow-hidden flex  items-center  ">
        <div className="flex items-center justify-center min-w-[373px] min-h-[816px] border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 " style={myStyle3}>
          <div className="px-3 py-1 text-4xl font-medium leading-none text-center text-blue-800 rounded-full animate-pulse dark:text-blue-600">loading...</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* นำ AppRouter เข้าไปใน component tree ของแอปพลิเคชัน */}
      <AppRouter />
    </div>
  );
}

export default App;






