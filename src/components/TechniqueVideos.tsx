import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Play, Pause, Volume2, VolumeX, Maximize2, Wind, Moon, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface VideoData {
  src: string;
  title: string;
  description: string;
  category: 'breathing' | 'sleeping';
}

const TechniqueVideos: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [muted, setMuted] = useState<{ [key: string]: boolean }>({});
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const videos: VideoData[] = [
    {
      src: '/Breathing_technique_1.mp4',
      title: 'Breathing Technique 1',
      description: 'Learn effective breathing exercises to manage stress and anxiety. This technique helps regulate your nervous system and promotes relaxation.',
      category: 'breathing'
    },
    {
      src: '/breathing_technique_2.mp4',
      title: 'Breathing Technique 2',
      description: 'Advanced breathing exercises for deeper relaxation and emotional regulation. Practice this technique daily for optimal mental wellness.',
      category: 'breathing'
    },
    {
      src: '/sleeping_technique.mp4',
      title: 'Sleeping Technique',
      description: 'Guided relaxation technique to help you fall asleep faster and improve sleep quality. Perfect for those struggling with insomnia or restlessness.',
      category: 'sleeping'
    }
  ];

  const getCategoryIcon = (category: string) => {
    return category === 'breathing' ? Wind : Moon;
  };

  const togglePlay = (videoSrc: string) => {
    const video = videoRefs.current[videoSrc];
    if (!video) return;

    if (playingVideo === videoSrc) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => {
        if (v && v.src !== video.src) {
          v.pause();
        }
      });
      video.play();
      setPlayingVideo(videoSrc);
    }
  };

  const toggleMute = (videoSrc: string) => {
    const video = videoRefs.current[videoSrc];
    if (!video) return;

    video.muted = !video.muted;
    setMuted((prev) => ({ ...prev, [videoSrc]: video.muted }));
  };

  const handleFullscreen = (videoSrc: string) => {
    setFullscreenVideo(videoSrc);
  };

  const closeFullscreen = () => {
    const video = videoRefs.current[fullscreenVideo || ''];
    if (video) {
      video.pause();
    }
    setFullscreenVideo(null);
    setPlayingVideo(null);
  };

  const breathingVideos = videos.filter((v) => v.category === 'breathing');
  const sleepingVideos = videos.filter((v) => v.category === 'sleeping');

  return (
    <section id="techniques" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            Wellness{' '}
            <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
              Techniques
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Learn evidence-based techniques for stress management, relaxation, and better sleep. Practice these exercises regularly for improved mental wellness.
          </p>
        </div>

        <Tabs defaultValue="breathing" className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="bg-muted p-1 rounded-lg w-full sm:w-auto h-auto flex flex-row gap-1">
              <TabsTrigger 
                value="breathing" 
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Breathing Techniques
              </TabsTrigger>
              <TabsTrigger 
                value="sleeping" 
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Sleep Techniques
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="breathing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {breathingVideos.map((video) => {
                const Icon = getCategoryIcon(video.category);
                return (
                  <Card key={video.src} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 flex flex-col">
                    <CardHeader className="p-0 relative">
                      <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
                        <video
                          ref={(el) => (videoRefs.current[video.src] = el)}
                          src={video.src}
                          className="w-full h-full object-cover"
                          onEnded={() => setPlayingVideo(null)}
                          muted={muted[video.src] ?? false}
                          playsInline
                          preload="none"
                          poster=""
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-medium">
                            <Icon className="h-3 w-3" />
                            <span>Breathing</span>
                          </div>
                        </div>
                        {/* Play/Pause Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                          <Button
                            size="icon"
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:shadow-2xl hover:scale-110 transition-all duration-300"
                            onClick={() => togglePlay(video.src)}
                          >
                            {playingVideo === video.src ? (
                              <Pause className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            ) : (
                              <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white ml-1" />
                            )}
                          </Button>
                        </div>
                        {/* Video Controls */}
                        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm"
                            onClick={() => toggleMute(video.src)}
                          >
                            {muted[video.src] ? (
                              <VolumeX className="h-4 w-4" />
                            ) : (
                              <Volume2 className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm"
                            onClick={() => handleFullscreen(video.src)}
                          >
                            <Maximize2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg sm:text-xl mb-2">{video.title}</CardTitle>
                          <CardDescription className="text-sm sm:text-base leading-relaxed">
                            {video.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-5 sm:p-6 pt-0 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Practice daily</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFullscreen(video.src)}
                        className="text-xs"
                      >
                        <Maximize2 className="h-3 w-3 mr-2" />
                        Fullscreen
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="sleeping" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sleepingVideos.map((video) => {
                const Icon = getCategoryIcon(video.category);
                return (
                  <Card key={video.src} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 flex flex-col">
                    <CardHeader className="p-0 relative">
                      <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
                        <video
                          ref={(el) => (videoRefs.current[video.src] = el)}
                          src={video.src}
                          className="w-full h-full object-cover"
                          onEnded={() => setPlayingVideo(null)}
                          muted={muted[video.src] ?? false}
                          playsInline
                          preload="none"
                          poster=""
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-medium">
                            <Icon className="h-3 w-3" />
                            <span>Sleep</span>
                          </div>
                        </div>
                        {/* Play/Pause Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                          <Button
                            size="icon"
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-primary to-[var(--kunj-java)] hover:shadow-2xl hover:scale-110 transition-all duration-300"
                            onClick={() => togglePlay(video.src)}
                          >
                            {playingVideo === video.src ? (
                              <Pause className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            ) : (
                              <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white ml-1" />
                            )}
                          </Button>
                        </div>
                        {/* Video Controls */}
                        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm"
                            onClick={() => toggleMute(video.src)}
                          >
                            {muted[video.src] ? (
                              <VolumeX className="h-4 w-4" />
                            ) : (
                              <Volume2 className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm"
                            onClick={() => handleFullscreen(video.src)}
                          >
                            <Maximize2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg sm:text-xl mb-2">{video.title}</CardTitle>
                          <CardDescription className="text-sm sm:text-base leading-relaxed">
                            {video.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-5 sm:p-6 pt-0 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Practice before bed</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFullscreen(video.src)}
                        className="text-xs"
                      >
                        <Maximize2 className="h-3 w-3 mr-2" />
                        Fullscreen
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Fullscreen Video Dialog */}
      <Dialog open={!!fullscreenVideo} onOpenChange={closeFullscreen}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-black border-none">
          <DialogHeader className="sr-only">
            <DialogTitle>
              {fullscreenVideo ? videos.find((v) => v.src === fullscreenVideo)?.title : ''}
            </DialogTitle>
          </DialogHeader>
          {fullscreenVideo && (
            <div className="relative w-full aspect-video bg-black">
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[fullscreenVideo] = el;
                    if (playingVideo === fullscreenVideo) {
                      el.play();
                    }
                  }
                }}
                src={fullscreenVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay={playingVideo === fullscreenVideo}
                muted={muted[fullscreenVideo] ?? false}
                preload="auto"
                onEnded={() => {
                  setPlayingVideo(null);
                  closeFullscreen();
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TechniqueVideos;

