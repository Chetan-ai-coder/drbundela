import Image from 'next/image';

export default function TestImageKitPage() {
  const testImages = [
    {
      path: "Dr Bundela/Doctor/doctor-Hero.JPG",
      name: "Doctor Hero"
    },
    {
      path: "Dr Bundela/Doctor/doctor-about.jpg",
      name: "Doctor About"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">ImageKit Integration Test</h1>
        
        <div className="mb-8 p-4 bg-secondary rounded-lg">
          <h2 className="text-xl font-bold mb-4">Expected URLs:</h2>
          <div className="space-y-2 font-mono text-sm">
            {testImages.map((img) => (
              <div key={img.path}>
                <p className="text-muted-foreground">{img.name}:</p>
                <p className="break-all">https://ik.imagekit.io/agenticimg/{img.path}?tr=w-600,q-75</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rendered Images:</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testImages.map((img) => (
            <div key={img.path} className="border border-primary/20 rounded-lg p-4">
              <p className="font-bold mb-4">{img.name}</p>
              <div className="relative w-full h-64 bg-secondary rounded-lg overflow-hidden">
                <Image
                  src={img.path}
                  alt={img.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log("[v0] Image error:", img.path, e);
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                If you see an image above, ImageKit is working!
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-blue-100 border border-blue-300 rounded-lg">
          <p className="text-sm">
            <strong>Debug Info:</strong> Check your browser Network tab to see if requests are being made to:
            <code className="block bg-white p-2 mt-2 rounded">https://ik.imagekit.io/agenticimg/...</code>
          </p>
        </div>
      </div>
    </div>
  );
}
