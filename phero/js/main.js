
function displayCourseContent() {
    const content = document.getElementById('display');
    document.getElementById('course-content').style.color = ' rgb(253, 0, 42)';
    document.getElementById('course-time').style.color = ' black';   

    const description = `
    
    <div class= 'container'>
    <div class="row">
        <div class="col-md-6 mt-4">
            <div class='course-information'>
                <div class='d-flex justify-content-center flex-column flex-lg-row align-items-center'>
                    <div class='text-center content-images p-3 pt-5'>
                    <img src="img/first.png" alt="">
                    </div>
                    <div class='p-3 pt-5'>
                        <h5>এইটা কমপ্লিট ওয়েব ডেভেলপমেন্ট এর কোর্স:</h5>
                        <p>শূন্য থেকে একজন জুনিয়র ওয়েব ডেভেলপার হিসেবে চাকরি পাওয়ার জন্য যা যা লাগে তার সবকিছুই ধরে ধরে শিখানো হয়েছে এই কোর্সে। সো, এই কোর্স ভালোভাবে ফিনিশ করলে ওয়েব ডেভেলপমেন্ট সম্পর্কে আর কোথাও কোন কোর্স না করেই ইন্টার্ন বা চাকরির চেষ্টা শুরু করে দিতে পারবে।</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 mt-4">
        <div class=' course-information'>
            <div class='d-flex justify-content-center flex-column flex-lg-row align-items-center'>
                <div class= 'text-center content-images p-3'>
                <img src="img/second.png" alt="">
                </div>
                <div class='p-3'>
                        <h5>আনলিমিটেড সাপোর্ট:</h5>
                        <p>কোর্স চলাকালীন সময়ে ২৪ ঘন্টার মধ্যে তোমার যেকোন প্রশ্নের উত্তর দেয়া হবে (ছুটির দিন বাদে)। অথাৎ প্রথম তিন মাস আমাদের ফেইসবুক গরূপে তোমার সব প্রশ্নের উত্তর দেয়া হবে। এবং জটিল কোন প্রবলেম হলে সেটা যদি ফেইসবুক গরূপে সলভ না হয় তাহলে সপ্তাহে ২/৩ বার গুগল হ্যাংআউট এ এসে তোমার স্কিন শেয়ার করে প্রবলেম সলভ করা হবে। আর কোর্স শেষ হয়ে গেলে (৩মাস পরেও ) তোমাকে লুজ সাপোর্ট দেয়া হবে (২৪ ঘন্টা লিমিট থাকবে না।)</p>
                </div>
            </div>
        </div>
        </div>
    
        <div class="col-md-6 mt-4">
            <div class=' course-information'>
                <div class=' d-flex justify-content-center flex-column flex-lg-row align-items-center'>
                    <div class= 'text-center content-images p-3'>
                   <img src="img/third.png" alt="">
                    </div>
                    
                    <div class='p-3'>
                        <h5>স্পেশাল ইন্টারভিউ প্রিপারেশন গ্রূপ:</h5>
                        <p>যারা ডেইলি ডেইলি কাজ করবে। প্রতিদিন ৬ থেকে ১০ ঘন্টা সময় দিবে। জানপ্রাণ দিয়ে সিরিয়াসভাবে কোর্স নিদৃস্ট সময়ের মধ্যে ফিনিশ করবে। তাদের নিয়ে তৈরি করা SCIC (Super Charged Interviewee Club) । এইটা ৪ থেকে ৬ সপ্তাহের স্পেশাল ট্রেনিং। যেটার জন্য আলাদা কোন ফি নাই। একটাই যোগ্যতা: সিরিয়াস হার্ডওয়ার্ক করে নিদৃস্ট সময়ের মধ্যে কোর্স ফিনিশ করা।</p>
                    </div>
                 
                </div>
            </div>
        </div>
        <div class="col-md-6 mt-4">
        <div class=' course-information'>
            <div class='d-flex justify-content-center flex-column flex-lg-row align-items-center'>
                <div class= 'text-center content-images p-3'>
                <img src="img/four.png" alt="">
                </div>
                <div class='p-3'>
                        <h5>চাকরির জন্য সিভি পাঠানো</h5>
                        <p>যারা SCIC তে সুযোগ পাবে। এবং সেটা ঠিক মতো শেষ করবে আরো ৪ থেকে ৬ সপ্তাহ লেগে থাকবে। তাদের সিভি আমরা পাঠিয়ে দিবো বিভিন্ন কোম্পানিতে। কোম্পানি হায়ার করবে, কি করবে না: সেটা তাদের সিদ্ধান্ত। আমাদের কাজ হচ্ছে সিভি পৌঁছে দেয়া। আমাদের একজন টিম মেম্বার কাজ করে যাবে তাকে চাকরি পাওয়ার জন্য হেল্প করতে। সো, যতক্ষণ পর্যন্ত তুমি লেগে আছো। আমরা আছি তোমার সাথে।</p>
                </div>
            </div>
        </div>
        </div> 
  </div>
  </div>

    `
    content.innerHTML = description;
   
   
 
};

function displayCourseDescription() {
    const content = document.getElementById('display');
    document.getElementById('course-time').style.color = ' rgb(253, 0, 42)';
    document.getElementById('course-content').style.color = ' black';    

    const description = `
    
    <section>
    <div class= 'container'>
      <div class="row">
          <div class="col-md-6 mt-4">
              <div class='course-description'>
                  <div class='d-flex justify-content-center  align-items-center flex-column flex-lg-row p-2'>
                      <div class= 'text-center course-description-header px-3'>
                      <h1>১</h1>
                      </div>
                      <div class='p-2'>
                          <p>প্রতিদিন রাত ১০.০০ এর সময় (বাংলাদেশ সময়) একটা মডিউল রিলিজ দেয়া হবে। তোমার কাজ হবে ২৪ ঘন্টার মধ্যে সব ভিডিও দেখে শেষ করে ফেলা। মোটামুটি ১.৫ থেকে ২ ঘন্টার মতো ভিডিও থাকবে।
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-6 mt-4">
          <div class='course-description'>
              <div class='d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                  <div class= 'text-center course-description-header px-3'>
                  <h1>২</h1>
                  </div>
                  <div class='p-2'>
                          <p>তবে শুধু ভিডিও দেখে গেলে কাজ হবে না। ভিডিও এর কোন টপিক বুঝতে না পারলে গুগল বা ইউটিউবে সার্চ দিয়ে আরো অন্য টিউটোরিয়াল দেখতে হবে। প্রত্যেক ভিডিও শেষে একাধিক প্রশ্ন থাকবে।
                          </p>
                  </div>
              </div>
          </div>
          </div>
      
          <div class="col-md-6 mt-4">
              <div class='course-description'>
                  <div class=' d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                      <div class= 'text-center course-description-header px-3'>
                      <h1>৩</h1>
                      </div>
                      <div class='p-2'>
                          <p>
                          কোথাও না বুঝলে বা আটকে গেলে। আমাদের ফেইসবুক গরূপে প্রশ্ন করতে পারবে। তোমার যেকোন প্রশ্নের উত্তর কোর্স চলাকালীন সময়ে ২৪ ঘন্টার মধ্যে উত্তর দেয়া হবে।
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-6 mt-4">
          <div class='course-description'>
              <div class='d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                  <div class= 'text-center course-description-header px-3'>
                  <h1>৪</h1>
                  </div>
                  <div class='p-2'>
                          <p>কোর্স এক টানা বারো সপ্তাহ চলবে। কোন ডেটিংয়ের ব্রেক, সূর্য না উঠার ব্রেক, বা পাশের বাড়ির ট্যাংকি লিক হয়ে যাওয়ার জন্য কোন গ্যাপ বা বাড়তি সময় দেয়া হবে না।
                          </p>
                  </div>
              </div>
          </div>
          </div> 
          <div class="col-md-6 mt-4">
              <div class='course-description'>
                  <div class=' d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                      <div class= 'text-center course-description-header px-3'>
                      <h1>৫</h1>
                      </div>
                      <div class='p-2'>
                          <p>
                          যারা নিদৃস্ট সময়ের মধ্যে ডেডিকেটেডভাবে লেগে থেকে কোর্স শেষ করবে। এসাইনমেন্ট সঠিক সময়ে সাবমিট করবে তাদের থেকে SCIC এর জন্য সিলেক্ট করা হবে। SCIC এর জন্য হার্ডওয়ার্ক ছাড়া আলাদা কোন ফি নেই।
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-6 mt-4">
          <div class='course-description'>
              <div class='d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                  <div class= 'text-center course-description-header px-3'>
                  <h1>৬</h1>
                  </div>
                  <div class='p-2'>
                          <p>
                          আমাদের কোর্স প্রি-রেকর্ডেড (ভিডিও আগে থেকে রেকর্ড করা থাকবে)। অর্থাৎ লাইভ ক্লাস হবে না। তাই রাত ১০.০০ এর পরে যেকোন সময়ের মধ্যে ভিডিও দেখে নিলেই চলবে। প্রতিদিন গড়ে ৬ থেকে ৮ ঘন্টা সময় দিতে হবে। মিনিমাম ৪ থেকে ৬ ঘন্টা সময় দিতেই হবে।
                          </p>
                  </div>
              </div>
          </div>
          </div> 
          <div class="col-md-6 mt-4">
              <div class='course-description'>
                  <div class=' d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                      <div class= 'text-center course-description-header px-3'>
                      <h1>৭</h1>
                      </div>
                      <div class='p-2'>
                          <p>
                          পাঁচ ছয়টা মডিউল পরে। যখন এসাইনমেন্ট থাকবে তখন এসাইনমেন্ট এর সাইজ অনুসারে তোমাকে এক দিন, দুই দিন বা তিন দিন সময় দেয়া হবে। এসাইনমেন্ট সঠিক সময়ে জমা দিলে ৬০ মার্কস। একদিন দেরি করলে ৫০ মার্কস। তার চাইতেও বেশি সময় নিলে ৩০ মার্কস।
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-6 mt-4">
          <div class='course-description'>
              <div class='d-flex justify-content-center align-items-center flex-column flex-lg-row p-2'>
                  <div class= 'text-center course-description-header px-3'>
                  <h1>৮</h1>
                  </div>
                  <div class='p-2'>
                          <p>
                          দরকার হলে মাঝে মধ্যে ফেইসবুক গরূপে লাইভ এসে প্রশ্নের উত্তর বা কনসেপ্ট ব্যাখ্যা করা হবে। প্রয়োজনে কোর্সের মধ্যে নতুন মডিউল যোগ করা হবে। যাতে তুমি পরিপূর্ন ওয়েব ডেভেলপার হয়ে উঠো এই একটা মাত্র কোর্স থেকে।
                          </p>
                  </div>
              </div>
          </div>
          </div> 
     </div>
   </section>  

    `
    content.innerHTML = description;
   
   
 
}
// function for toggle display faq
function displayFAQ(id, id2, id3) {
    const faq = document.getElementById(id);
    let minus = document.getElementById(id2);
    let plus = document.getElementById(id3);
    
    if (faq.style.display === "none") {
        faq.style.display = "block";
        minus.innerHTML = `
        <i class="fas fa-minus fa-2x"></i>
        `
        plus.innerHTML = '';
      }

      else {
        faq.style.display = "none";
        plus.innerHTML = `
        <i class="fas fa-plus fa-2x"></i>`
        minus.innerHTML = '';
      }

      toggle(id, true);
}

const toggle = (id, show) =>{
    const faqTwo = document.getElementById(id);
    if (show) {
        faqTwo.classList.remove('d-none');
    
    }
  

}



// function for swiper

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
