# UUID Changer for V2Ray Links

UUID Changer for V2Ray Links is a web application designed to simplify the process of updating UUIDs within V2Ray links. This tool provides an intuitive interface for users to input multiple V2Ray links and a new UUID, then automatically updates each link with the new UUID.

## Features

- **V2Ray Link UUID Updating**: Easily change the UUIDs in V2Ray links with a single input.
- **Supports Multiple Link Protocols**: Handles both VMess and other protocols.
- **Batch Processing**: Input multiple V2Ray links at once and update them all with the new UUID.
- **Copy to Clipboard**: Quickly copy the updated links to your clipboard for easy use.
- **User-Friendly Interface**: Clean and responsive design using Tailwind CSS.
- **Real-Time Feedback**: Instant feedback on link processing and clipboard actions.

## Technologies Used

- **Vite**: For fast and optimized development and build processes.
- **Tailwind CSS**: For highly customizable and responsive design.
- **Preline**: For additional UI components and utilities.
- **PostCSS and Autoprefixer**: For CSS transformations and browser compatibility.
- **JavaScript Base64**: For decoding and encoding VMess link configurations.

## Installation and Usage

### Prerequisites

- [pnpm](https://pnpm.io/installation)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/esa-zz/UUID-Changer.git
   cd uuid-changer
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   pnpm run dev
   ```

4. **Build the project for production**:
   ```bash
   pnpm run build
   ```

## License

This project is licensed under the ISC License.
