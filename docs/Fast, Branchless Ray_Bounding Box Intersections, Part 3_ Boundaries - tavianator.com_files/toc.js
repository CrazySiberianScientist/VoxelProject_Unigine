// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html">Home</a></li><li class="chapter-item expanded "><a href="projects/index.html">Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="projects/bfs.html">bfs</a></li><li class="chapter-item expanded "><a href="projects/acap.html">acap</a></li><li class="chapter-item expanded "><a href="projects/bistring.html">bistring</a></li></ol></li><li class="chapter-item expanded "><div>2024</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2024/percent.html">Rounding percentages</a></li><li class="chapter-item expanded "><a href="2024/btrfs_bug.html">Bug hunting in Btrfs</a></li></ol></li><li class="chapter-item expanded "><div>2023</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2023/translucent.html">Translucent typedefs in C</a></li><li class="chapter-item expanded "><a href="2023/bfs_3.0.html">bfs 3.0: the fastest find yet!</a></li><li class="chapter-item expanded "><a href="2023/futex.html">You could have invented futexes</a></li><li class="chapter-item expanded "><a href="2023/irregex.html">Irregular expressions</a></li></ol></li><li class="chapter-item expanded "><div>2022</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2022/ray_box_boundary.html">Fast, Branchless Ray/Bounding Box Intersections, Part 3: Boundaries</a></li><li class="chapter-item expanded "><a href="2022/remote_reboots.html">Remote reboots with encrypted disks</a></li><li class="chapter-item expanded "><a href="2022/parallel_graph_search.html">Parallelizing graph search with Rayon</a></li><li class="chapter-item expanded "><a href="2022/long_division.html">Long division</a></li></ol></li><li class="chapter-item expanded "><div>2020</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020/one_plus_one.html">Proving that 1 + 1 = 10 in Rust</a></li><li class="chapter-item expanded "><a href="2020/oomify.html">OOMify</a></li><li class="chapter-item expanded "><a href="2020/makeover.html">Makeover</a></li><li class="chapter-item expanded "><a href="2020/porting_kd_forests.html">Porting k-d forests to Rust</a></li></ol></li><li class="chapter-item expanded "><div>2018</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2018/spawn_of_satan.html">spawn() of Satan</a></li><li class="chapter-item expanded "><a href="2018/dhce.html">Cracking DHCE (Diffie-Hellman color exchange)</a></li></ol></li><li class="chapter-item expanded "><div>2017</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2017/bfs_3.html">bfs from the ground up, part 3: optimization</a></li><li class="chapter-item expanded "><a href="2017/bfs_2.html">bfs from the ground up, part 2: parsing</a></li></ol></li><li class="chapter-item expanded "><div>2016</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2016/matrix_multiply.html">A quick trick for faster naïve matrix multiplication</a></li><li class="chapter-item expanded "><a href="2016/bfs_1.html">bfs from the ground up, part 1: traversal</a></li><li class="chapter-item expanded "><a href="2016/aesa.html">The Approximating and Eliminating Search Algorithm</a></li></ol></li><li class="chapter-item expanded "><div>2015</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2015/autoboxing.html">Java autoboxing performance</a></li><li class="chapter-item expanded "><a href="2015/ray_box_nan.html">Fast, Branchless Ray/Bounding Box Intersections, Part 2: NaNs</a></li></ol></li><li class="chapter-item expanded "><div>2014</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2014/int_exp.html">Efficient Integer Exponentiation in C</a></li><li class="chapter-item expanded "><a href="2014/alloca.html">Standards-compliant* alloca()</a></li><li class="chapter-item expanded "><a href="2014/python_visitor.html">The Visitor Pattern in Python</a></li><li class="chapter-item expanded "><a href="2014/ellipsoid_bounding_boxes.html">Exact Bounding Boxes for Spheres/Ellipsoids</a></li><li class="chapter-item expanded "><a href="2014/ray_mesh.html">A Beautiful Ray/Mesh Intersection Algorithm</a></li><li class="chapter-item expanded "><a href="2014/ray_triangle.html">A Beautiful Ray/Triangle Intersection Method</a></li><li class="chapter-item expanded "><a href="2014/announcing_sangria.html">Announcing Sangria</a></li><li class="chapter-item expanded "><a href="2014/kd_forests.html">k-d Forests</a></li><li class="chapter-item expanded "><a href="2014/big_numbers.html">Big Numbers</a></li></ol></li><li class="chapter-item expanded "><div>2013</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2013/java_quirks.html">Java Generics Quirks</a></li><li class="chapter-item expanded "><a href="2013/fair_and_square.html">Fair and Square, or How to Count to a Googol</a></li></ol></li><li class="chapter-item expanded "><div>2012</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2012/binary_trees.html">Iterating Over Binary Trees</a></li></ol></li><li class="chapter-item expanded "><div>2011</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2011/collisions.html">Collisions</a></li><li class="chapter-item expanded "><a href="2011/ray_prtree.html">Ray / Priority R-Tree Intersection</a></li><li class="chapter-item expanded "><a href="2011/priority_r_trees.html">Priority R-Trees</a></li><li class="chapter-item expanded "><a href="2011/ray_box.html">Fast, Branchless Ray/Bounding Box Intersections</a></li><li class="chapter-item expanded "><a href="2011/bcd.html">Fast Binary-Coded Decimal Addition and Subtraction</a></li><li class="chapter-item expanded "><a href="2011/double_squares.html">Facebook Hacker Cup Qualification Round: Double Squares</a></li></ol></li><li class="chapter-item expanded "><div>2010</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="2010/righteous_hack.html">Righteous hack: getting 2⁶³ - 1 points in a silly Facebook game</a></li><li class="chapter-item expanded "><a href="2010/solving_cubic_polynomials.html">Solving Cubic Polynomials</a></li><li class="chapter-item expanded "><a href="2010/solving_polynomials.html">Solving Polynomials</a></li><li class="chapter-item expanded "><a href="2010/first.html">.com</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
