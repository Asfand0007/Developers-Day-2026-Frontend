"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import {
  HomeIcon,
  CubeIcon,
  CalendarIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  FlagIcon,
  BoltIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

const modules = [
  { id: "coding", label: "Coding", icon: CodeBracketIcon },
  { id: "software-eng", label: "Software Eng", icon: CommandLineIcon },
  { id: "tech-quest", label: "Tech Quest", icon: CpuChipIcon },
  { id: "dev-design", label: "Dev & Design", icon: ComputerDesktopIcon },
  { id: "ai-data", label: "AI & Data", icon: CircleStackIcon },
  { id: "general", label: "General", icon: FlagIcon },
  { id: "electrical-eng", label: "Electrical Eng", icon: BoltIcon },
  { id: "business", label: "Business", icon: PresentationChartBarIcon },
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isMobileModulesOpen, setIsMobileModulesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsModulesOpen(false);
    setIsMobileModulesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsModulesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "HOME", href: "/", icon: HomeIcon },
    { name: "EVENT_DETAILS", href: "/event-details", icon: CalendarIcon },
    { name: "OUR_TEAM", href: "/our-team", icon: UserGroupIcon },
    { name: "CONTACT_US", href: "/contact-us", icon: EnvelopeIcon },
  ];

  const isModulesActive = pathname.startsWith("/modules");

  return (
    <Navbar
      className="bg-dark-red border-b border-[#382929]"
      classNames={{
        wrapper: "container mx-auto px-4 md:px-6 h-20",
        item: "text-white data-[active=true]:text-white font-mono",
        menu: "bg-dark-red",
      }}
      height="5rem"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Brand */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <motion.div
            key={pathname}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              alt="DevDay Logo"
              className="object-contain"
              height={49}
              src="/logo.png"
              width={33}
            />
            <p className="font-bold text-white text-lg tracking-[0.18em]">
              DEVDAY &apos;26
            </p>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Toggle */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        <LayoutGroup id="navbar-links">
          {/* HOME */}
          {menuItems.slice(0, 1).map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavbarItem key={item.name} className="relative">
                <Link
                  className="text-white hover:text-gray-200 text-sm md:text-base transition-colors font-bold tracking-[0.18em]"
                  href={item.href}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-primary"
                    layoutId="navbar-active-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavbarItem>
            );
          })}

          {/* MODULES Dropdown */}
          <NavbarItem ref={dropdownRef} className="relative">
            <button
              aria-expanded={isModulesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 cursor-pointer text-white hover:text-gray-200 text-sm md:text-base font-bold tracking-[0.18em] transition-colors focus:outline-none"
              onClick={() => setIsModulesOpen((v) => !v)}
              onMouseEnter={() => setIsModulesOpen(true)}
              onMouseLeave={() => setIsModulesOpen(false)}
            >
              MODULES
              <motion.span
                animate={{ rotate: isModulesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4" />
              </motion.span>
            </button>

            {isModulesActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-primary"
                layoutId="navbar-active-underline"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Dropdown Panel */}
            <AnimatePresence>
              {isModulesOpen && (
                <motion.div
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-64 bg-dark-red border border-[#4a2020] shadow-2xl z-50"
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  style={{ borderRadius: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onMouseEnter={() => setIsModulesOpen(true)}
                  onMouseLeave={() => setIsModulesOpen(false)}
                >
                  {/* Arrow */}
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-dark-red border-l border-t border-[#4a2020] rotate-45" />

                  <div className="py-2">
                    {modules.map((mod, i) => {
                      const Icon = mod.icon;
                      const isActive = pathname === `/modules/${mod.id}`;

                      return (
                        <motion.button
                          key={mod.id}
                          animate={{ opacity: 1, x: 0 }}
                          className={`w-full flex cursor-pointer items-center gap-3 px-5 py-2.5 text-sm font-bold tracking-widest transition-colors text-left
                            ${
                              isActive
                                ? "text-white bg-red-primary/20 border-l-2 border-red-primary"
                                : "text-gray-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                            }`}
                          initial={{ opacity: 0, x: -6 }}
                          transition={{ delay: i * 0.03 }}
                          onClick={() => {
                            router.push(`/modules/${mod.id}`);
                            setIsModulesOpen(false);
                          }}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          {mod.label.toUpperCase()}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </NavbarItem>

          {/* Remaining items */}
          {menuItems.slice(1).map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <NavbarItem key={item.name} className="relative">
                <Link
                  className="text-white hover:text-gray-200 text-sm md:text-base transition-colors font-bold tracking-[0.18em]"
                  href={item.href}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-primary"
                    layoutId="navbar-active-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavbarItem>
            );
          })}
        </LayoutGroup>
      </NavbarContent>

      {/* Register Button - Desktop */}
      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-red-primary hover:bg-red-700 text-lg text-white font-bold gap-10 px-8"
            href="/register"
            radius="none"
          >
            REGISTER_NOW
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-dark-red pt-6 flex flex-col items-center pb-10">
        {/* HOME */}
        {menuItems.slice(0, 1).map((item, index) => {
          const Icon = item.icon;

          return (
            <NavbarMenuItem
              key={`${item.name}-${index}`}
              className="w-full flex justify-center"
            >
              <Link
                className="text-white hover:text-gray-200 flex items-center gap-3 py-2"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}

        {/* MODULES accordion */}
        <NavbarMenuItem className="w-full">
          <button
            className="w-full flex items-center justify-center gap-3 py-2 text-white hover:text-gray-200 text-lg font-normal focus:outline-none"
            onClick={() => setIsMobileModulesOpen((v) => !v)}
          >
            <CubeIcon className="w-5 h-5" />
            MODULES
            <motion.span
              animate={{ rotate: isMobileModulesOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDownIcon className="w-4 h-4" />
            </motion.span>
          </button>

          <AnimatePresence>
            {isMobileModulesOpen && (
              <motion.div
                animate={{ height: "auto", opacity: 1 }}
                className="overflow-hidden flex flex-col items-center w-full ml-2"
                exit={{ height: 0, opacity: 0 }}
                initial={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center w-fit gap-1 py-2 border-red-primary/40 border-l-2">
                  {modules.map((mod) => {
                    const Icon = mod.icon;
                    const isActive = pathname === `/modules/${mod.id}`;

                    return (
                      <Link
                        key={mod.id}
                        className={`flex items-center gap-2 py-1 px-4 text-white hover:text-gray-200 text-base font-normal tracking-widest transition-colors w-full 
                          ${isActive ? "text-white border-red-primary border-l-3" : "text-white hover:text-white"}`}
                        href={`/modules/${mod.id}`}
                        onPress={() => setIsMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {mod.label.toUpperCase()}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </NavbarMenuItem>

        {/* Rest of items */}
        {menuItems.slice(1).map((item, index) => {
          const Icon = item.icon;

          return (
            <NavbarMenuItem
              key={`${item.name}-${index}`}
              className="w-full flex justify-center"
            >
              <Link
                className="text-white hover:text-gray-200 flex items-center gap-3 py-2"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}

        <NavbarMenuItem className="w-full flex justify-center mt-4">
          <Button
            as={Link}
            className="bg-red-primary hover:bg-red-700 text-lg text-white font-bold px-8"
            href="/register"
            radius="none"
            onPress={() => setIsMenuOpen(false)}
          >
            REGISTER_NOW
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
