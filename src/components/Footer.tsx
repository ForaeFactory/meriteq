export default function Footer() {
  return (
    <footer className="bg-obsidian text-paper pt-32 pb-12 hover-target">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-7xl md:text-8xl font-serif tracking-tight mb-12 italic">
              Merit EQ.
            </h2>
            <div className="text-sm font-semibold text-stone-muted uppercase tracking-[0.2em] leading-loose">
              Anchored in Austin, Texas <br/>
              Operating Globally
            </div>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-8 flex flex-col justify-end">
             <ul className="space-y-6 text-paper/80 text-lg font-light">
               <li><a href="#" className="hover:text-cyan-accent transition-colors relative group">Agile Transformation<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#" className="hover:text-cyan-accent transition-colors relative group">M&A Advisory<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#" className="hover:text-cyan-accent transition-colors relative group">RTM Optimization<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
             </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-end mt-12 lg:mt-0">
             <ul className="space-y-6 text-paper/80 text-lg font-light">
               <li><a href="mailto:contact@meriteq.com" className="hover:text-cyan-accent transition-colors relative group">Contact<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#" className="hover:text-cyan-accent transition-colors relative group">LinkedIn<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#" className="hover:text-cyan-accent transition-colors relative group">Twitter<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
             </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone/20 text-stone-muted text-xs font-semibold tracking-widest uppercase">
          <div>&copy; {new Date().getFullYear()} Merit EQ Consulting. All rights reserved.</div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
