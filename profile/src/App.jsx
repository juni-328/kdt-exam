import './App.css'

function App() {
  const profile = {
    name: 'Naseungjun',
    job: 'Front-end Developer',
    email: 'naseungjun@example.com',
    imageUrl: '/profile.png'   // public 폴더에 넣은 이미지 경로
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">Profile</h1>
      </header>
      <main className="main">
        <div className="profile-card">
          <img src={profile.imageUrl} alt={`${profile.name}의 프로필 이미지`} />
          <h2>{profile.name}</h2>
          <p>{profile.job}</p>
          <p>{profile.email}</p>
        </div>
      </main>
    </div>
  )
}

export default App
