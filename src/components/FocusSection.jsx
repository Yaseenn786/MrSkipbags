export default function FocusSection() {
    return (
      <section id="focus" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brandGrey mb-12">
            You Handle the <span className="text-green-600">Project</span>. <br />
            We Handle the <span className="text-green-600">Waste</span>.
          </h2>
  
          {/* Split Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Customer */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-brandGrey">
                Your Easy Part
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Buy any skip bag from your local store (like <strong>Circle K</strong>). 
                Fill it up at your own pace. <br /> ✅ Your job is done.
              </p>
            </div>
  
            {/* Right Side - Mr Skip Bags */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-6xl mb-4">🚛</div>
              <h3 className="text-2xl font-bold mb-4 text-brandGrey">
                Our Professional Part
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Call <strong>Mr Skip Bags</strong>. <br />
                We arrive fast, collect the heavy bag safely, 
                and dispose of everything responsibly. <br /> 💪 Our job begins.
              </p>
            </div>
          </div>
  
          {/* Big CTA */}
          <div className="text-center mt-12">
            <a
              href="#booking"
              className="bg-green-600 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-xl transition"
            >
              Schedule Your Collection Now
            </a>
          </div>
        </div>
      </section>
    );
  }
  