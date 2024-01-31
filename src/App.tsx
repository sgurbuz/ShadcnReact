
import './App.css'
import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useResolvedPath,
  useMatch,
  LinkProps
} from "react-router-dom";

import { AccordionDemo } from './examples/accordion'
import { AlertDemo } from './examples/alert'
import { AlertDialogDemo } from './examples/alertdialog'
import { AvatarDemo } from './examples/avatar'
import { BadgeDemo } from './examples/badge'
import { ButtonDemo } from './examples/button'
import { CalendarDemo } from './examples/calendar'
import { CardWithForm } from './examples/card'
import { CarouselDemo } from './examples/carousel'
import { CheckboxDemoPage } from './examples/checkbox'
import { CollapsibleDemo } from './examples/collabsible'
import { ComboboxDemo } from './examples/combobox'
import { CommandDemo } from './examples/command'
import { ContextMenuDemo } from './examples/contextmenu'
import { DatePickerDemo } from './examples/datepicker'
import { DialogDemo } from './examples/dialog'
import { DrawerDemo } from './examples/drawer'
import { DropdownMenuDemo } from './examples/dropdownmenu'
import { HoverCardDemo } from './examples/hovercard'
import { InputWithLabel } from './examples/input'
import { LabelDemo } from './examples/label'
import { MenubarDemo } from './examples/menubar'
import {  NavigationMenuDemoPage } from './examples/navigationmenu'
import { PaginationDemo } from './examples/pagination'
import { PopoverDemo } from './examples/popover'
import { ProgressDemo } from './examples/progress'
import { RadioGroupDemo } from './examples/radiogroup'
import { ResizableDemo } from './examples/resizable'
import { ScrollAreaDemo } from './examples/scrollarea'
import { SelectDemo } from './examples/select'
import { SeparatorDemo } from './examples/separator'
import { SheetDemo } from './examples/sheet'
import { SkeletonDemo } from './examples/skeleton'
import { SliderDemo } from './examples/slider'
import { SonnerDemo } from './examples/sonner'
import { SwitchDemo } from './examples/switch'
import { TableDemo } from './examples/table'
import { TabsDemo } from './examples/tabs'
import { TextareaDemo } from './examples/textarea'
import { ToastDemo } from './examples/toast'
import { ToggleDemo } from './examples/toggle'
import { ToggleGroupDemo } from './examples/togglegroup'
import { TooltipDemo } from './examples/tooltip'
import { AspectRatioDemo } from './examples/aspectratio';

const componentList = [
  {
    name: 'Accordion',
    link: 'accordion',
  },
  {
    name: 'Alert Dialog',
    link: 'alert-dialog',
  },
  {
    name: 'Alert',
    link: 'alert',
  },
  {
    name: 'Aspect Ratio',
    link: 'aspect-ratio',
  },
  {
    name: 'Avatar',
    link: 'avatar',
  },
  {
    name: 'Badge',
    link: 'badge',
  },
  {
    name: 'Button',
    link: 'button',
  },
  {
    name: 'Calendar',
    link: 'calendar',
  },
  {
    name: 'Card',
    link: 'card',
  },
  {
    name: 'Carousel',
    link: 'carousel',
  },
  {
    name: 'Checkbox',
    link: 'checkbox',
  },
  {
    name: 'Collapsible',
    link: 'collapsible',
  },
  {
    name: 'Combobox',
    link: 'combobox',
  },
  {
    name: 'Command',
    link: 'command',
  },
  {
    name: 'Context Menu',
    link: 'context-menu',
  },
  {
    name: 'Datepicker',
    link: 'datepicker',
  },
  {
    name: 'Dialog',
    link: 'dialog',
  },
  {
    name: 'Drawer',
    link: 'drawer',
  },
  {
    name: 'Dropdown',
    link: 'dropdown',
  },
  {
    name: 'Hover Card',
    link: 'hover-card',
  },
  {
    name: 'Input',
    link: 'input',
  },
  {
    name: 'Label',
    link: 'label',
  },
  {
    name: 'Menu Bar',
    link: 'menubar',
  },
  {
    name: 'Navigation',
    link: 'navigation',
  },
  {
    name: 'Pagination',
    link: 'pagination',
  },
  {
    name: 'Popover',
    link: 'popover',
  },
  {
    name: 'Progress Bar',
    link: 'progress',
  },
  {
    name: 'Radio Group',
    link: 'radio-group',
  },
  {
    name: 'Resizable',
    link: 'resizable',
  },
  {
    name: 'Scroll Area',
    link: 'scroll-area',
  },
  {
    name: 'Select',
    link: 'select',
  },
  {
    name: 'Separator',
    link: 'separator',
  },
  {
    name: 'Sheet',
    link: 'sheet',
  },
  {
    name: 'Skeleton',
    link: 'skeleton',
  },
  {
    name: 'Slider',
    link: 'slider',
  },
  {
    name: 'Sonner',
    link: 'sonner',
  },
  {
    name: 'Switch',
    link: 'switch',
  },
  {
    name: 'Table',
    link: 'table',
  },
  {
    name: 'Tabs',
    link: 'tabs',
  },
  {
    name: 'Textarea',
    link: 'textarea',
  },
  {
    name: 'Toast',
    link: 'toast',
  },
  {
    name: 'Toggle Group',
    link: 'toggle-group',
  },
  {
    name: 'Toggle',
    link: 'toggle',
  },
  {
    name: 'Tooltip',
    link: 'tooltip',
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "accordion",
        Component: AccordionDemo,
      },
      {
        path: "alert-dialog",
        Component: AlertDialogDemo,
      },
      {
        path: "alert",
        Component: AlertDemo,
      },
      {
        path: "aspect-ratio",
        Component: AspectRatioDemo,
      },
      {
        path: "avatar",
        Component: AvatarDemo,
      },
      {
        path: "badge",
        Component: BadgeDemo,
      },
      {
        path: "button",
        Component: ButtonDemo,
      },
      {
        path: "calendar",
        Component: CalendarDemo,
      },
      {
        path: "card",
        Component: CardWithForm,
      },
      {
        path: "carousel",
        Component: CarouselDemo,
      },
      {
        path: "checkbox",
        Component: CheckboxDemoPage,
      },
      {
        path: "collapsible",
        Component: CollapsibleDemo,
      },
      {
        path: "combobox",
        Component: ComboboxDemo,
      },
      {
        path: "command",
        Component: CommandDemo,
      },
      {
        path: "context-menu",
        Component: ContextMenuDemo,
      },
      {
        path: "datepicker",
        Component: DatePickerDemo,
      },
      {
        path: "dialog",
        Component: DialogDemo,
      },
      {
        path: "drawer",
        Component: DrawerDemo,
      },
      {
        path: "dropdown",
        Component: DropdownMenuDemo,
      },
      {
        path: "hover-card",
        Component: HoverCardDemo,
      },
      {
        path: "input",
        Component: InputWithLabel,
      },
      {
        path: "label",
        Component: LabelDemo,
      },
      {
        path: "menubar",
        Component: MenubarDemo,
      },
      {
        path: "navigation",
        Component: NavigationMenuDemoPage,
      },
      {
        path: "pagination",
        Component: PaginationDemo,
      },
      {
        path: "popover",
        Component: PopoverDemo,
      },
      {
        path: "progress",
        Component: ProgressDemo,
      },
      {
        path: "radio-group",
        Component: RadioGroupDemo,
      },
      {
        path: "resizable",
        Component: ResizableDemo,
      },
      {
        path: "scroll-area",
        Component: ScrollAreaDemo,
      },
      {
        path: "select",
        Component: SelectDemo,
      },
      {
        path: "separator",
        Component: SeparatorDemo,
      },
      {
        path: "sheet",
        Component: SheetDemo,
      },
      {
        path: "skeleton",
        Component: SkeletonDemo,
      },
      {
        path: "slider",
        Component: SliderDemo,
      },
      {
        path: "sonner",
        Component: SonnerDemo,
      },
      {
        path: "switch",
        Component: SwitchDemo,
      },
      {
        path: "table",
        Component: TableDemo,
      },
      {
        path: "tabs",
        Component: TabsDemo,
      },
      {
        path: "textarea",
        Component: TextareaDemo,
      },
      {
        path: "toast",
        Component: ToastDemo,
      },
      {
        path: "toggle-group",
        Component: ToggleGroupDemo,
      },
      {
        path: "toggle",
        Component: ToggleDemo,
      },
      {
        path: "tooltip",
        Component: TooltipDemo,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function LiveLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className='space-y-0.5'>
      <Link
        style={{fontWeight:match ? "bold" : "normal", color: match ? "#22d3ee" : "inherit" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      </li>
  );
}

export function Layout() {
  const location = useLocation();

  const isActive = (name: string | string[]) => name.includes(location.pathname);

  console.log('Layout', isActive(location.pathname), location.pathname);

  const theList = componentList.map(component => 
    <LiveLink to={component.link}>{component.name}</LiveLink>
  );

  return (
    <div>
      <div className='flex flex-row flex-wrap'>
        <div className='w-full sm:w-1/3 md:w-1/6 px-2 bg-slate-100'>
          <div className='sticky top-0 p-4 w-full'>
          <div className='py-1 text-xl'>Components</div>
          <div className='py-2'>
            <ul className='flex flex-col overflow-hidden list-none'>
              {theList}
            </ul>
          </div>
          </div>
        </div>
        <div className='w-full sm:w-2/3 md:w-5/6 pt-1 px-2'>
          <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Component Samples</h1>
            <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Home() {
  return (
    <div>
      <p className='text-3xl'>Welcome to Shadcn UI React Boilerplate</p>
    </div>
  );
}

