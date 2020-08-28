
export class LazyLoadingImg {

    onSCrollShow;
    onDestroyEvent;
    observer;

    constructor(anchor) {
        // On scroll reveal sections
        let options = {
            root: null,
            rootMargin: "0px 0px -20px 0px",
            threshold: [0, 0.8]
        };
        
        this.onSCrollShow = () => {

            // Observe on scroll and show element in the middle of the screen
            const onIntersection = (entries) => {
                entries.forEach(entry => {
                // Are we in viewport?
                if (entry.intersectionRatio > 0) {

                        if (entry.target.classList.contains("bg-view")) {
                            entry.target.classList.add('bg-animation');
                        }

                        if (entry.target.classList.contains("icons-wrapper")) {
                            entry.target.classList.add('service-wrapper-animation');
                        }

                    }

                    else {
                        return
                      }
                this.observer.unobserve(entry.target);     
                });
            }
            
            this.observer = new IntersectionObserver(onIntersection, options);
            this.observer.observe(anchor);
            
        }

        window.addEventListener('scroll', this.onSCrollShow, {passive: true});
        this.onDestroyEvent = () => {
            window.removeEventListener('scroll', this.onSCrollShow);
        }
    }
};