# Developer Portfolio

A responsive portfolio website built with Angular 18 for a developer with 2 years of experience in Angular, .NET Core, and SQL.

## Features

- Responsive design for all devices
- Modern UI with smooth animations
- Sections for showcasing skills, projects, and experience
- Contact form with validation
- Easily customizable content

## Technologies Used

- Angular 18
- TypeScript
- Bootstrap 5
- SCSS
- Font Awesome
- Responsive Design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v18)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

- `src/app/components/` - Reusable components (header, footer)
- `src/app/pages/` - Page components (home, about, skills, projects, contact)
- `src/app/services/` - Services for data management
- `src/assets/` - Static assets like images
- `src/styles.scss` - Global styles

## Customization

1. Update personal information in the portfolio service (`src/app/services/portfolio.service.ts`)
2. Replace placeholder images in `src/assets/images/`
3. Modify color scheme in `src/styles.scss`

## Deployment

To build the project for production:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for the icons
- Angular team for the amazing framework
