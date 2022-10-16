$(() => {
  const posts = {
    "Jurassic Mile": {
      date: "August 8, 2021",
      title: "Family Outing at Jurassic Mile",
      category: "Sports",
      description: "On the day before Singapore's 56th birthday, our family went cycling at Changi Jurassic Mile. It was a really fun experience. We started at Changi and ended at east coast..."
    },
  
    "Why Python": {
      date: "November 27, 2021",
      title: "Why You Should Learn Python",
      category: "Coding",
      description: "This post will tell you why you should learn a legendary programming language - Python"
    },
  
    "Riddles": {
      date: "September 25, 2021",
      title: "15 Interesting Riddles for You!",
      category: "Comedey",
      description: "Bored? Here are 15 riddles for you to solve! Rember, the answer isn't always as expected!"
    },
  
    "Passwords": {
      date: "March 21, 2022",
      title: "How to Create a Secure Password",
      category: "Coding",
      description: "Have you found it difficult to create a strong password? This post can help you to create a secure one!"
    },
  
    "Cycling Routes": {
      date: "January 7, 2022",
      title: "My Favourite Cycling Routes in Singapore",
      category: "Sports",
      description: "Are you looking for places to cycle here in Singapore? Well, there are many! Here are my top 5 picks"
    },
  
    "": {
      date: "",
      title: "",
      category: "",
      description: ""
    },
  
    "": {
      date: "",
      title: "",
      category: "",
      description: ""
    },
  }

  // Jurasssic Mile
  $('*[data-post-detail="jm--date"]').each(function() {
    $(this).html(posts["Jurassic Mile"].date)
  })

  $('*[data-post-detail="jm--title"]').each(function() {
    $(this).html(posts["Jurassic Mile"].title)
  })

  // Why Python
  $('*[data-post-detail="wp--date"]').each(function() {
    $(this).html(posts["Why Python"].date)
  })

  $('*[data-post-detail="wp--title"]').each(function() {
    $(this).html(posts["Why Python"].title)
  })

  // Riddles
  $('*[data-post-detail="r--date"]').each(function() {
    $(this).html(posts["Riddles"].date)
  })

  $('*[data-post-detail="r--title"]').each(function() {
    $(this).html(posts["Riddles"].title)
  })

  // Passwords
  $('*[data-post-detail="p--date"]').each(function() {
    $(this).html(posts["Passwords"].date)
  })

  $('*[data-post-detail="p--title"]').each(function() {
    $(this).html(posts["Passwords"].title)
  })

  // Cycling Routes
  $('*[data-post-detail="cr--date"]').each(function() {
    $(this).html(posts["Cycling Routes"].date)
  })

  $('*[data-post-detail="cr--title"]').each(function() {
    $(this).html(posts["Cycling Routes"].title)
  })
})
