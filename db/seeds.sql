INSERT INTO users (firstName, lastName, userName, password, upvote, downvote, email)
VALUES
("kevin", "do", "kaydo", "!2Qwqwer", 0, 0, "kdo@gmail.com"),
("aidan", "guitar", "guitarman", "!2Qwqwer", 0, 0, "aguitar@gmail.com"),
("chris", "army", "armomo", "!2Qwqwer", 0, 0, "carmy@gmail.com"),
("pauline", "yoyo", "catgirl", "!2Qwqwer", 0, 0, "paulcat@gmail.com"),
("michael", "jackson", "thriller", "!2Qwqwer", 0, 0, "smoothcriminal@gmail.com");

INSERT INTO categories (name)
VALUES 
("javascript"),
("php"),
("python");

INSERT INTO threads (CategoryId, threadName)
VALUES 
(1, "anonymous functions"),
(1, "callback functions"),
(1, "closure"),
(1, "functional programming"),
(2, "define php"),
(2, "why do we still use php"),
(3, "why makes python easy to use");

INSERT INTO comments (ThreadId, replies, upvotes, downvotes)
VALUES 
(1, "do they ask interview questions about anonymous functions?", 1000,1222),
(1, "i still do not understand anonymous functions", 230, 500),
(1, "what are anonymous functions",100, 200),
(2, "what are callback functions?", 150, 75),
(2, "why do we need call back functions?", 100, 50),
(2, "is there anything similar to call back functions?", 25, 10),
(6, "because some companies want to", 25, 10),
(7, "because of its easy to understand syntax", 30, 10);

INSERT INTO votealreadies (upvoteBtn, neutralBtns, downvoteBtns, CommentId, UserId)
VALUES
(false, true, false, 1, 1),
(false, true, false, 1, 2),
(false, true, false, 1, 3),
(false, true, false, 1, 4),
(false, true, false, 1, 5);

INSERT INTO emails (UserId, recipient, title, message)
VALUES
(2, "kaydo", "callback functions", "Hi, can you help me at 730 this friday?"),
(2, "kaydo", "anonymous functions", "Actually, I'm feeling kind of sick. Can wee meet next Monday?"),
(1, "guitarman", "callback functions", "Yes, I can help you. You should watch understanding the weird parts of javascript before we chat." ),
(1, "guitarman", "anonymous functions", "That's a bummer! I hope you don't have the flu. I hear that it's worse this year. Hope you feel better soon!"),
(1, "guitarman", "closures", "I heard you just learned about closures in your bootcamp! Can you help me?"),
(2, "kaydo", "closures", "Yeah, I feel like I understand it pretty well! My professor, Clark, is one of the best instructors I've encountered."),
(1, "guitarman", "study habits", "How do you study best? Do you like reading everything entirely before moving onto the next thing? Im not sure what's the best way to learn programming"),
(2, "kaydo", "study habits", "I feel that learning by trial and error and building projects seem to work well for me. Don't get stuck into a bunch of rabbit holes. You should definitely practice hard, but move on quickly. You'll find that things that were hard a few weeks ago, don't seem that difficult to comprehend.");
