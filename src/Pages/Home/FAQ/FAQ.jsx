import React from 'react';

const FAQ = () => {
    return (
         <div className="mt-8 font-urbanist mb-10">
      <h1 className="text-center font-urbanist text-3xl font-bold  text-[#03373D] mt-3">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-center text-[#606060] mt-3">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 mt-3">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content text-sm">
          Is there readily available customer support via phone, chat, or email
          for those who prefer not to use digital platforms or require
          assistance with the ordering/tracking process? This is crucial for
          individuals who may have vision impairments, hearing difficulties, or
          simply prefer verbal communication.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content text-sm">
          For those who already suffer from back pain, limited mobility, or
          other physical challenges, a reliable courier service makes it
          possible to send and receive items without exacerbating their
          condition. This convenience can significantly improve their quality of
          life.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Does it have smart features like vibration alerts?
        </div>
        <div className="collapse-content text-sm">
          In today's competitive logistics landscape, "smart features" like
          robust tracking, automated notifications (including vibrations), and
          user-friendly apps are becoming standard expectations for efficient
          and customer-centric courier services.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How will I be notified when the product is back in stock?
        </div>
        <div className="collapse-content text-sm">
          That's an excellent question, and it highlights a key aspect of good
          customer service for any company that deals with inventory, including
          those that act as retailers or have specific products they supply
          (like "ProFast | Industrial Fastening Solutions" which appeared in my
          search, or if "ProFast" is a specific brand of product a courier might
          deliver for a retailer).
        </div>
      </div>
    </div>
    );
};

export default FAQ;