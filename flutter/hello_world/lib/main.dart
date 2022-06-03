// import 'package:flutter/material.dart';

// void main() {
//   runApp(const MyApp());
// }

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Welcome to Flutter'),
//         ),
//         body: const Center(
//           child: Text('Hello World'),
//         ),
//       ),
//     );
//   }
// }

// import 'package:english_words/english_words.dart';
// import 'package:flutter/material.dart';

// void main() {
//   runApp(const MyApp());
// }

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     final wordPair = WordPair.random();
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Welcome to Flutter'),
//         ),
//         body: Center(
//           //child: Text('Hello World'),
//           child: Text(wordPair.asPascalCase),
//         ),
//       ),
//     );
//   }
// }

/* 
This example creates a Material app. 
Material is a visual-design language that's standard on mobile and the web. 
Flutter offers a rich set of Material widgets.

The app extends StatelessWidget, which makes the app itself a widget. In Flutter, 
almost everything is a widget, including alignment, padding, and layout.

The Scaffold widget, from the Material library, provides a default app bar, 
a title, and a body property that holds the widget tree for the home screen. 
The widget subtree can be quite complex.

A widget's main job is to provide a build method that describes how to display 
the widget in terms of other, lower-level widgets.

The body for this example consists of a Center widget containing a Text child widget. 
The Center widget aligns its widget subtree to the center of the screen.
*/

/*
Stateless widgets are immutable, meaning that their properties can't change—all values are final.
Stateful widgets maintain state that might change during the lifetime of the widget.
*/

// import 'package:english_words/english_words.dart';
// import 'package:flutter/material.dart';

// void main() {
//   runApp(const MyApp());
// }

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Welcome to Flutter'),
//         ),
//         body: const Center(
//           child: RandomWords(),
//         ),
//       ),
//     );
//   }
// }

// class RandomWords extends StatefulWidget {
//   const RandomWords({Key? key}) : super(key: key);

//   @override
//   State<RandomWords> createState() => _RandomWordsState();
// }

// class _RandomWordsState extends State<RandomWords> {
//   @override
//   Widget build(BuildContext context) {
//     final wordPair = WordPair.random();
//     return Text(wordPair.asPascalCase);
//   }
// }

/* Creating an infinite scrolling ListView */
// import 'package:english_words/english_words.dart';
// import 'package:flutter/material.dart';

// void main() {
//   runApp(const MyApp());
// }

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Startup Name Generator',
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Startup Name Generator'),
//         ),
//         body: const Center(
//           child: RandomWords(),
//         ),
//       ),
//     );
//   }
// }

// class RandomWords extends StatefulWidget {
//   const RandomWords({Key? key}) : super(key: key);

//   @override
//   State<RandomWords> createState() => _RandomWordsState();
// }

// class _RandomWordsState extends State<RandomWords> {
//   final _suggestions = <WordPair>[];
//   final _biggerFont = const TextStyle(fontSize: 18);

//   @override
//   Widget build(BuildContext context) {
//     return ListView.builder(
//       padding: const EdgeInsets.all(16.0),
//       itemBuilder: (context, i) {
//         if (i.isOdd) return const Divider();

//         final index = i ~/ 2;
//         if (index >= _suggestions.length) {
//           _suggestions.addAll(generateWordPairs().take(10));
//         }
//         return ListTile(
//           title: Text(
//             _suggestions[index].asPascalCase,
//             style: _biggerFont,
//           ),
//         );
//       },
//     );
//   }
// }

/* Add icons to the list */
// import 'package:english_words/english_words.dart';
// import 'package:flutter/material.dart';

// void main() {
//   runApp(const MyApp());
// }

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Startup Name Generator',
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Startup Name Generator'),
//         ),
//         body: const Center(
//           child: RandomWords(),
//         ),
//       ),
//     );
//   }
// }

// class RandomWords extends StatefulWidget {
//   const RandomWords({Key? key}) : super(key: key);

//   @override
//   State<RandomWords> createState() => _RandomWordsState();
// }

// class _RandomWordsState extends State<RandomWords> {
//   final _suggestions = <WordPair>[];
//   final _saved = <WordPair>{};
//   final _biggerFont = const TextStyle(fontSize: 18);

//   @override
//   Widget build(BuildContext context) {
//     return ListView.builder(
//       padding: const EdgeInsets.all(16.0),
//       itemBuilder: (context, i) {
//         if (i.isOdd) return const Divider();

//         final index = i ~/ 2;
//         if (index >= _suggestions.length) {
//           _suggestions.addAll(generateWordPairs().take(10));
//         }

//         final alreadySaved = _saved.contains(_suggestions[index]);
//         return ListTile(
//           title: Text(
//             _suggestions[index].asPascalCase,
//             style: _biggerFont,
//           ),
//           trailing: Icon(
//               alreadySaved ? Icons.favorite : Icons.favorite_border,
//               color: alreadySaved ? Colors.red : null,
//               semanticLabel: alreadySaved ? 'Remove from saved' : 'Save',
//           ),
//           onTap: () {
//               setState(() {
//                 if (alreadySaved) {
//                     _saved.remove(_suggestions[index]);
//                 } else {
//                     _saved.add(_suggestions[index]);
//                 }
//             });
//           }
//         );
//       },
//     );
//   }
// }

/* Navigate to a new screen */
// import 'package:english_words/english_words.dart';
// import 'package:flutter/material.dart';

// void main() {
//   runApp(const MyApp());
// }

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return const MaterialApp(
//       title: 'Startup Name Generator',
//       home: RandomWords(),
//     );
//   }
// }

// class RandomWords extends StatefulWidget {
//   const RandomWords({Key? key}) : super(key: key);

//   @override
//   State<RandomWords> createState() => _RandomWordsState();
// }

// class _RandomWordsState extends State<RandomWords> {
//   final _suggestions = <WordPair>[];
//   final _saved = <WordPair>{};
//   final _biggerFont = const TextStyle(fontSize: 18);

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: const Text('Startup Name Generator'),
//         actions: [
//           IconButton(
//             icon: const Icon(Icons.list),
//             onPressed: _pushSaved,
//             tooltip: 'Saved Suggestions',
//           ),
//         ],
//       ),
//         body: ListView.builder(
//         padding: const EdgeInsets.all(16.0),
//         itemBuilder: (context, i) {
//             if (i.isOdd) return const Divider();

//             final index = i ~/ 2;
//             if (index >= _suggestions.length) {
//             _suggestions.addAll(generateWordPairs().take(10));
//             }

//             final alreadySaved = _saved.contains(_suggestions[index]);
//             return ListTile(
//             title: Text(
//                 _suggestions[index].asPascalCase,
//                 style: _biggerFont,
//             ),
//             trailing: Icon(
//                 alreadySaved ? Icons.favorite : Icons.favorite_border,
//                 color: alreadySaved ? Colors.red : null,
//                 semanticLabel: alreadySaved ? 'Remove from saved' : 'Save',
//             ),
//             onTap: () {
//                 setState(() {
//                     if (alreadySaved) {
//                         _saved.remove(_suggestions[index]);
//                     } else {
//                         _saved.add(_suggestions[index]);
//                     }
//                 });
//             }
//             );
//         },
//         ),
//     );
//   }

//   void _pushSaved() {
//       Navigator.of(context).push(
//           MaterialPageRoute<void>(
//               builder: (context) {
//                   final tiles = _saved.map(
//                       (pair) {
//                           return ListTile(
//                               title: Text(
//                                   pair.asPascalCase,
//                                   style: _biggerFont,
//                               ),
//                           );
//                       },
//                   );
//                   final divided = tiles.isNotEmpty
//                     ? ListTile.divideTiles(
//                         context: context,
//                         tiles: tiles,
//                       ).toList()
//                     : <Widget>[];
                  
//                   return Scaffold(
//                     appBar: AppBar(
//                       title: const Text('Saved Suggestions'),
//                     ),
//                     body: ListView(children: divided),
//                   );
//               },
//           )
//       );
//   }
// }


/* Change the UI using themes */
import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name Generator',
      theme: ThemeData(
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
        ),
      ),
      home: const RandomWords(),
    );
  }
}

class RandomWords extends StatefulWidget {
  const RandomWords({Key? key}) : super(key: key);

  @override
  State<RandomWords> createState() => _RandomWordsState();
}

class _RandomWordsState extends State<RandomWords> {
  final _suggestions = <WordPair>[];
  final _saved = <WordPair>{};
  final _biggerFont = const TextStyle(fontSize: 18);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Startup Name Generator'),
        actions: [
          IconButton(
            icon: const Icon(Icons.list),
            onPressed: _pushSaved,
            tooltip: 'Saved Suggestions',
          ),
        ],
      ),
        body: ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemBuilder: (context, i) {
            if (i.isOdd) return const Divider();

            final index = i ~/ 2;
            if (index >= _suggestions.length) {
            _suggestions.addAll(generateWordPairs().take(10));
            }

            final alreadySaved = _saved.contains(_suggestions[index]);
            return ListTile(
            title: Text(
                _suggestions[index].asPascalCase,
                style: _biggerFont,
            ),
            trailing: Icon(
                alreadySaved ? Icons.favorite : Icons.favorite_border,
                color: alreadySaved ? Colors.red : null,
                semanticLabel: alreadySaved ? 'Remove from saved' : 'Save',
            ),
            onTap: () {
                setState(() {
                    if (alreadySaved) {
                        _saved.remove(_suggestions[index]);
                    } else {
                        _saved.add(_suggestions[index]);
                    }
                });
            }
            );
        },
        ),
    );
  }

  void _pushSaved() {
      Navigator.of(context).push(
          MaterialPageRoute<void>(
              builder: (context) {
                  final tiles = _saved.map(
                      (pair) {
                          return ListTile(
                              title: Text(
                                  pair.asPascalCase,
                                  style: _biggerFont,
                              ),
                          );
                      },
                  );
                  final divided = tiles.isNotEmpty
                    ? ListTile.divideTiles(
                        context: context,
                        tiles: tiles,
                      ).toList()
                    : <Widget>[];
                  
                  return Scaffold(
                    appBar: AppBar(
                      title: const Text('Saved Suggestions'),
                    ),
                    body: ListView(children: divided),
                  );
              },
          )
      );
  }
}