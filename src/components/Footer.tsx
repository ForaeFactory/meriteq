export default function Footer() {
  return (
    <footer id="contact" className="bg-obsidian text-paper pt-32 pb-12 hover-target">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-7xl md:text-8xl font-serif tracking-tight mb-4 italic">
              Merit EQ.
            </h2>
            <div className="text-lg font-serif italic text-cyan-accent mb-8">
              Christina A. Costello, MBA &mdash; Principal
            </div>
            <div className="text-sm font-semibold text-stone-muted uppercase tracking-[0.2em] leading-loose">
              Anchored in Austin, Texas <br/>
              Operating Globally
            </div>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-8 flex flex-col justify-end">
             <ul className="space-y-6 text-paper/80 text-lg font-light">
               <li><a href="#pedigree" className="hover:text-cyan-accent transition-colors relative group">Pedigree<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#discipline" className="hover:text-cyan-accent transition-colors relative group">Elite Discipline<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#leadership" className="hover:text-cyan-accent transition-colors relative group">Leadership DNA<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="#journey" className="hover:text-cyan-accent transition-colors relative group">Strategic Journey<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
             </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-end mt-12 lg:mt-0">
             <ul className="space-y-6 text-paper/80 text-lg font-light">
               <li><a href="mailto:Christina@merit-eq.com" className="hover:text-cyan-accent transition-colors relative group">Contact<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
               <li><a href="https://www.linkedin.com/in/christinaacostello/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-colors relative group">LinkedIn<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"/></a></li>
             </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone/20 text-stone-muted text-xs font-semibold tracking-widest uppercase">
          <div>&copy; {new Date().getFullYear()} Merit EQ. All rights reserved.</div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
