
INSERT INTO users (firstName, lastName, userName, password, upvote, downvote, email)
VALUES
("kevin", "do", "kaydo", "!2Qwqwer", 999, 0, "kdo@gmail.com"),
("aidan", "guitar", "guitarman", "!2Qwqwer", 789, 456, "aguitar@gmail.com"),
("chris", "army", "armomo", "!2Qwqwer", 897, 234, "carmy@gmail.com"),
("pauline", "yoyo", "catgirl", "!2Qwqwer", 789, 413, "paulcat@gmail.com"),
("michael", "jackson", "thriller", "!2Qwqwer", 978, 123, "smoothcriminal@gmail.com"),
("threaderzzz bot", "threaderzzz bot", "threaderzzz bot", "!2Qwqwer", 10000, 0, "bot@threaderzzz.com");

INSERT INTO categories (name)
VALUES 
("javascript"),
("php"),
("python");

INSERT INTO threads (CategoryId, threadName, UserId, createdAt, updatedAt, threadSummary)
VALUES 
(1, "What are anonymous functions?", 1, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "Hi guys, I am in a bootcamp and don't know what this is. My boot camp is at UCLA extension and my professor assigned us homework in relation to this topic. I am still trying to wrap my mind around this concept. Unfortunately, my other classmates are as lost as I am. We're all pretty new to coding. Please help me. Much appreciated."),
(1, "How do callback functions help with asynchronous code?", 2, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "I've heard that callbacks can solve asynch problems. I am new to coding and have a basic understanding of asynchronous code. Can someone please show me an example that might help me understand how these two concepts relate?"),
(1, "How does closure work in Javascript?", 2, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "Can someone please explain to me how closures work? I watched a course on YouTube, but I think it confused me a bit more. Does anyeone have an example that might help me easily comprehend it better?"),
(1, "What is functional programming?", 1, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "I am watching Understanding the Weird Parts Javascript on Udemy and am pretty lost on this concept. Can someone help me achieve a basic understanding of functional programming and its benefit?"),
(2, "Is it worth learning PHP in this day and age? ", 4, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "I've been learning PHP for about three days now. I know that technology changes rapidly, and I just found out that there are other server-side languages that are more trendy than PHP. I feel like I learned a lot in these three days about PHP and would hate for it to go to waste. Should I continue to learn PHP, or switch to something else?"),
(2, "What disadvantages does PHP have over Python and Node.js?", 5, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "I just started learning web development on CodeAcademy. When it comes to server-side programming, what disadvantages does PHP have over others such as Python and Node.js"),
(3, "What makes Python easy to learn and use?", 4, "2018-11-04 01:21:26", "2018-11-04 01:21:26", "I am about to embark on a journey to become a Web Developer. There's so much to learn our there, and I've been hearing a lot that I should learn Python because it's simple. I am not sure why though.");

INSERT INTO comments (ThreadId, replies, upvotes, downvotes, createdAt, updatedAt, UserId)
VALUES 
(1, "Anonymous functions are functions with no name identifier. The name is optional, but because you're probably using it just once, the name isn't important.", 1200, 1001, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 2),
(1, "Thanks guitarman! I think I understand it a lot better now.", 5, 0, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 1),
(1, "Don't mention it, padawan.", 540,  23, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 2),
(2, "Callbacks are helpful for asych code because for example, you might want to execute a block of code only after something like an API call, which is asynchronous, is made. Like, if you're using Yelp's API and don't use callbacks, your function might run before getting the information from Yelp.", 150, 75, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 3),
(2, "Thanks for explaining it with a simple example, armomo!", 10, 3, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 4),
(2, "What is synchronous code?", 0, 55, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 5),
(6, "Node and Python are very popular. I believe Node is popular because you get to utilize javascript as server side programming. You don't have to learn a new language, per se, so people getting started into things like web development have an easier time making that transition to learning back end stuff. ", 99, 10, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 1),
(7, "Because of its easy to understand syntax, which makes it easier to learn. Its code is also shorter than C++. ", 30, 10, "2018-11-04 01:21:26", "2018-11-04 01:21:26", 1);

INSERT INTO votealreadies (upvoteBtn, neutralBtns, downvoteBtns, CommentId, UserId)
VALUES
(false, true, false, 1, 1),
(false, true, false, 1, 2),
(false, true, false, 1, 3),
(false, true, false, 1, 4),
(false, true, false, 1, 5);

INSERT INTO emails (createdAt, updatedAt, UserId, recipient, title, message)
VALUES
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 2, "kaydo", "callback functions", "Hi, can you help me at 730 this friday?"),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 2, "kaydo", "anonymous functions", "Actually, I'm feeling kind of sick. Can wee meet next Monday?"),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 1, "guitarman", "callback functions", "Yes, I can help you. You should watch understanding the weird parts of javascript before we chat." ),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 1, "guitarman", "anonymous functions", "That's a bummer! I hope you don't have the flu. I hear that it's worse this year. Hope you feel better soon!"),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 1, "guitarman", "closures", "I heard you just learned about closures in your bootcamp! Can you help me?"),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 2, "kaydo", "closures", "Yeah, I feel like I understand it pretty well! My professor, Clark, is one of the best instructors I've encountered."),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 1, "guitarman", "study habits", "How do you study best? Do you like reading everything entirely before moving onto the next thing? Im not sure what's the best way to learn programming"),
("2018-11-04 01:21:26", "2018-11-04 01:21:26", 2, "kaydo", "study habits", "I feel that learning by trial and error and building projects seem to work well for me. Don't get stuck into a bunch of rabbit holes. You should definitely practice hard, but move on quickly. You'll find that things that were hard a few weeks ago, don't seem that difficult to comprehend.");
