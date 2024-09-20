// 43. Learn JavaScript INHERITANCE

// 🔍 Inheritance = allows a new class to inherit properties and methods
// from an existing class. This promotes code reusability and makes it
// easier to manage and extend functionality without duplicating code.
//
// 🛠️ How it Works:
// When a class extends another class, it gains access to all the
// properties and methods of the parent class. This allows the
// child class to build upon the existing functionality, making it
// easier to create specialized classes without rewriting shared logic.

class Team {
  active = true; // 🏷️ Indicates if the team is currently active

  inTournament() {
    // ⚔️ Method to indicate participation in a tournament
    console.log(`⚔️ ${this.name} is currently competing in a tournament`);
  }

  findingPlayer() {
    // 🔍 Method to search for new players
    console.log(`🔍 ${this.name} is searching for another player`);
  }
}

class Team1 extends Team {
  name = "Gaimin Gladiators"; // 🏆 Name of the team

  ChampionshipLosses() {
    // 😢 Method to indicate championship losses
    console.log(
      `😢🔄 ${this.name} has lost the International Grand Finals twice`
    );
  }
}

class Team2 extends Team {
  name = "Team Spirit"; // 🏆 Name of the team

  ChampionshipWins() {
    // 🏆 Method to indicate championship wins
    console.log(
      `🏆🏆 ${this.name} has won the International Championship twice`
    );
  }
}

class Team3 extends Team {
  name = "Team Liquid"; // 🏆 Name of the team

  differentRoster() {
    // 🔄 Method to indicate wins with different rosters
    console.log(
      `🏆🏆 ${this.name} has won the International Championship twice with entirely different rosters`
    );
  }
}

// Creating team instances 🧑‍🤝‍🧑
const team1 = new Team1();
const team2 = new Team2();
const team3 = new Team3();

// 🖨️ Logs:
// Calling methods for each team
team1.findingPlayer(); // 🖨️ Logs: Gaimin Gladiators is searching for another player
team1.ChampionshipLosses(); // 🖨️ Logs: 😢🔄 Gaimin Gladiators has lost the International Grand Finals twice

team2.inTournament(); // 🖨️ Logs: Team Spirit is currently competing in a tournament
team2.ChampionshipWins(); // 🖨️ Logs: 🏆🏆 Team Spirit has won the International Championship twice

team3.inTournament(); // 🖨️ Logs: Team Liquid is currently competing in a tournament
team3.differentRoster(); // 🖨️ Logs: 🏆🏆 Team Liquid has won the International Championship twice with entirely different rosters

// 🧠 Simple Analogy 🧠
// 🚪 Think of inheritance like a family tree. The parent (base class)
// passes down its traits (properties and methods) to its children
// (subclasses). Each child can also have its own unique traits
// while still keeping the family resemblance.

// 🎯 Possible Use Cases of Inheritance in JavaScript: 🎯
// 1️⃣ Code Reusability 🔄: Share common functionality across multiple classes, reducing duplication.
// 2️⃣ Specialized Classes 🌟: Create subclasses that extend the behavior of a parent class with additional features.
// 3️⃣ Polymorphism 🔀: Allow methods to be overridden in subclasses, enabling dynamic behavior based on the object's type.
// 4️⃣ Hierarchical Structures 🏰: Organize classes into a hierarchy, making the codebase easier to understand and maintain.
// 5️⃣ Abstract Classes 🏗️: Define a base class with abstract methods that must be implemented by subclasses, enforcing a contract.
// 6️⃣ Extending Libraries 📚: Build on existing libraries by creating new classes that inherit from library classes, adding custom behavior.
// 7️⃣ Encapsulation 📦: Hide internal state while exposing only necessary properties and methods through inheritance.
// 8️⃣ Creating Frameworks 🛠️: Enable the creation of frameworks where base classes define common functionality that can be extended by user-defined classes.
// 9️⃣ Event Handling 🎟️: Create event-driven classes where subclasses can handle specific events by extending a base event class.
// 🔟 Type Checking ✅: Use inheritance to define a set of related classes, allowing for type checks and validations within functions and methods.
