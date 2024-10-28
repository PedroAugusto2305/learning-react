import Profile from "./components/profile";

export default function App() {
    return (
        <div className="app">
            <Profile
                avatar="https://avatars.githubusercontent.com/u/85378029?v=4"
                nome="Avatar Pedro"
                text="Pedro"
                bio="Software Engineer"
                email="pedro@email.com"
                phone="+5512123456"
                githubUrl="github.com"
                linkedinUrl="linkedin.com"
                twitterUrl="twitter.com"
            />
        </div>
    )
}