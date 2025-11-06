Tronmebel Website Rebuild - MVP Development Plan
Overview

Rebuilding the Bulgarian furniture company website with modern responsive design, focusing on their core services: custom furniture design, manufacturing, and installation for homes and offices.
Key Features Observed

    Bulgarian language content
    Navigation: Начало (Home), За Нас (About), Услуги (Services), Продукти (Products), Контакти (Contacts)
    Three main service categories: Спалня (Bedroom), Обществен интериор (Public Interior), Всекидневна (Living Room)
    Product showcase section
    Project portfolio section
    Company information and contact details
    Social media integration (Facebook)

Files to Create (Max 8 files)
1. src/pages/Index.tsx

    Hero section with company branding
    Service categories showcase (Bedroom, Public Interior, Living Room)
    Featured products section
    Featured projects section
    About us section
    Contact information
    Social media links

2. src/components/Header.tsx

    Navigation menu with Bulgarian text
    Responsive mobile menu
    Company logo area

3. src/components/ServiceCard.tsx

    Reusable card component for service categories
    Image, title, and description
    Hover effects and modern styling

4. src/components/ProductCard.tsx

    Product showcase card
    Image gallery capability
    Product title and description

5. src/components/ProjectCard.tsx

    Project portfolio card
    Before/after or showcase images
    Project description

6. src/components/ContactSection.tsx

    Contact information display
    Address, phone, email
    Social media integration

7. src/components/Footer.tsx

    Company information
    Contact details
    Social links

8. src/lib/data.ts

    Static data for products, projects, and content
    Bulgarian text content
    Mock data structure

Design Principles

    Modern, clean aesthetic with furniture industry focus
    Warm color palette (browns, creams, elegant neutrals)
    High-quality imagery placeholders
    Mobile-first responsive design
    Fast loading with optimized components
    Accessibility considerations

Technical Implementation

    React with TypeScript
    Tailwind CSS for styling
    Shadcn/ui components for UI elements
    Responsive grid layouts
    Modern CSS animations and transitions
    Optimized images and performance
