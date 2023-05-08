'use client'
import { ToastContainer } from 'react-toastify';

const Footer = () => {
  return (
    <section className="bg-sky-950 text-slate-300 pl-5 pr-5 pt-28 pb-14 divide-y divide-slate-500">
      <ToastContainer />
      <section className="flex flex-grow justify-around pb-16">
        <ul className="">
          <li className="p-2">Show some image here</li>
          <li className="p-2">Making the world a better place</li>
          <li className="p-2">Social Icons</li>
        </ul>
        <ul>
        <li className="p-2 text-white">Solutions</li>
        <li className="p-2">Marketing</li>
        <li className="p-2">Analytics</li>
        <li className="p-2">Commerce</li>
        <li className="p-2">Insights</li>
        </ul>
        <ul>
        <li className="p-2 text-white">Support</li>
        <li className="p-2">Pricing</li>
        <li className="p-2">Documentation</li>
        <li className="p-2">Guides</li>
        <li className="p-2">API Status</li>
        </ul>
        <ul>
        <li className="p-2 text-white">Company</li>
        <li className="p-2">About</li>
        <li className="p-2">Blog</li>
        <li className="p-2">Jobs</li>
        <li className="p-2">Press</li>
        <li className="p-2">Partners</li>
        </ul>
        <ul>
        <li className="p-2 text-white">Legal</li>
        <li className="p-2">Claim</li>
        <li className="p-2">privacy</li>
        <li className="p-2">Terms</li>
        </ul>
      </section>
      <section className="pl-10 pt-10">
        <p>&copy; 2023 Realtor, Inc. All rights reserved.</p>
      </section>
    </section>
  )
}

export default Footer