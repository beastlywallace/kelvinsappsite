import React from "react";
import standingDance from "../assets/kelvinfiles/standingDance.jpg";

export default    function PerformancesPage (){
    const performances = [
      {
        title: "Kelvinsapp wows the governor with outstanding performance",
        platform: "YouTube",
        videoId: "R2mQsnRYM-0",
        embedUrl: "https://www.youtube.com/embed/R2mQsnRYM-0",
      },
      {
        title: "kelvinsapp killed this performance",
        platform: "Facebook",
        videoId: "1524558354840383",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkelvinsappp%2Fvideos%2F1524558354840383%2F&show_text=false&width=560&t=0",
      },
      {
        title: "A musical comedy well delivered",
        platform: "YouTube",
        videoId: "a2gATpPBxdo",
        embedUrl: "https://www.youtube.com/embed/a2gATpPBxdo",
      },
      {
        title: "Kelvinsapp sabi the comedy",
        platform: "Facebook",
        videoId: "1322505938379410",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkelvinsappp%2Fvideos%2F1322505938379410%2F&show_text=false&width=560&t=0",
      },
      {
        title: "kelvinsapp amazing performance",
        platform: "YouTube",
        videoId: "AC2VHRxHbuo",
        embedUrl: "https://www.youtube.com/embed/AC2VHRxHbuo",
      },
      {
        title: "kelvinsapp on music comedy",
        platform: "Facebook",
        videoId: "3795169934036789",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkelvinsappp%2Fvideos%2F3795169934036789%2F&show_text=false&width=560&t=0",
      },
      {
        title: "kelvinsapp Say no to drug",
        platform: "Youtube",
        videoId: "uM22aYaECio",
        embedUrl: "https://www.youtube.com/watch?v=uM22aYaECio",
      },
 
    ];

    return (
      <div
        className="min-h-screen bg-gray-200 pt-20"
        style={{
          backgroundImage: `url(${standingDance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-16 [text-shadow:2px_2px_4px_#000000b3]">
            Gallery
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {performances.map((performance, index) => (
              <div
                key={index}
                className="bg-[#0009]rounded-lg overflow-hidden shadow-xl"
              >
                <div className="relative">
                  <iframe
                    src={performance.embedUrl}
                    width="100%"
                    height="315"
                    style={{ border: 'none' }}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title={performance.title}
                    className="w-full"
                  />
                </div>
                <div className="p-6 bg-[#0009]">
                  {/* <h3 className="text-white text-lg font-semibold mb-4">
                    {performance.title}
                  </h3> */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {performance.platform}
                    </span>
                    <a
                      href={performance.platform === "YouTube" 
                        ? `https://www.youtube.com/watch?v=${performance.videoId}`
                        : `https://www.facebook.com/kelvinsappp/videos/${performance.videoId}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 !text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                    >
                      Watch on {performance.platform}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@kelvinsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 !text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
            >
              View More Performances
            </a>
          </div>
        </div>
      </div>
    );
  };
