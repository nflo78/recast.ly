import VideoList from './VideoList.js'
import videos from '../data/exampleVideoData.js'
import VideoListEntry from './VideoListEntry.js'
import VideoPlayer from './VideoPlayer.js'



const App = () => {
  // const { useState } = React;
  const [selectedVideo, setSelectedVideo] = React.useState(videos[0]);

  return (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em><VideoPlayer video={selectedVideo}/></em> view test goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em><VideoList setSelectedVideo={(v) => setSelectedVideo(v)}videos={videos}/></em></h5></div>
      </div>
    </div>
  </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
