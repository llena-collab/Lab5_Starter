LUCIA LENA

1) **Would you use a unit test to test the “message” feature of a messaging application? Why or why not?** 
   No, because the "message" feature involves multiple moving parts, such as the user interface, network requests, and database interactions. Unit testing is designed for individual parts of code in encapsulated units. Since unit tests cannot test how individual components interact with each other on an application or feature level, you would need integration or end-to-end tests for this instead.
   
2) **Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?**
   Yes, because this is a specific, isolated logic check—essentially ensuring that a function correctly validates if a string is under 80 characters. Unit testing is perfect for this because debugging on a small scale without many moving parts is much easier. Additionally, these tests execute quickly and are unlikely to be affected by changes to unrelated application features.

link to the git-hub main page: https://llena-collab.github.io/Lab5_Starter/
link to expose.html: https://llena-collab.github.io/Lab5_Starter/expose.html
link to explore.html: https://llena-collab.github.io/Lab5_Starter/explore.html
