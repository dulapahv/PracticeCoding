// Rust program to demonstrate enum with function

enum Color {
	Red,
	Green,
	Blue,
	RgbColor(u8, u8, u8), // tuple
	CmykColor {
		cyan: u8,
		magenta: u8,
		yellow: u8,
		black: u8,
	}, // struct
}

fn main() {
	let c: Color = Color::CmykColor {
		cyan: 0,
		magenta: 128,
		yellow: 0,
		black: 255,
	};
	match_color(c);

	let c2: Color = Color::RgbColor(0, 128, 255);
	match_color(c2);

	let c3: Color = Color::Green;
	match_color(c3);

	let c4: Color = Color::CmykColor {
		cyan: 10,
		magenta: 20,
		yellow: 30,
		black: 40,
	};
	match_color(c4);
}

fn match_color(c: Color) {
	match c {
		Color::Red => println!("The color is Red"),
		Color::Green => println!("The color is Green"),
		Color::Blue => println!("The color is Blue"),
		Color::RgbColor(0, 0, 0) | Color::CmykColor { black: 255, .. } => {
			println!("The color is Black")
		}
		Color::RgbColor(r, g, b) => println!("The color is RGB ({}, {}, {})", r, g, b),
		Color::CmykColor {
			cyan: c,
			magenta: m,
			yellow: y,
			black: k,
		} => println!("The color is CMYK ({}, {}, {}, {})", c, m, y, k),
	}
}
