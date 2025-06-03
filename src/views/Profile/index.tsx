import ProfileHero from './components/Hero'
import ProfilePhotoGallery from './components/PhotoGallery'
import ProfileRecentAdventures from './components/RecentAdventures'
import ProfileStats from './components/Stats'

const ProfileView = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProfileHero />

      <ProfileStats />

      <ProfileRecentAdventures />

      {/* Photo Gallery */}
      <ProfilePhotoGallery />

      {/* Footer */}
      <footer className="border-t-4 border-yellow bg-white text-black">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex size-8 items-center justify-center bg-black font-black text-yellow">百</div>
                <span className="text-xl font-black">HYAKU MEIZAN</span>
              </div>
              <p className="font-medium">
                Track your progress through Japan's 100 Famous Mountains. Every summit counts.{' '}
                Every data point matters.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-black">PLATFORM</h4>
              <div className="space-y-2 font-bold">
                <div>TRACK PROGRESS</div>
                <div>SHARE ADVENTURES</div>
                <div>COMPETE GLOBALLY</div>
                <div>ANALYZE DATA</div>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-black">CONNECT</h4>
              <div className="space-y-2 font-bold">
                <div>JOIN COMMUNITY</div>
                <div>FIND PARTNERS</div>
                <div>SHARE ROUTES</div>
                <div>GET SUPPORT</div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t-2 border-black pt-8 text-center">
            <p className="text-lg font-black">© 2024 HYAKU MEIZAN • 百名山 TRACKING PLATFORM</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProfileView