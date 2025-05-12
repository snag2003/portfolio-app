export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Resume</h2>

            <div className="resume__timeline">
              <div className="resume__title-wrapper">
                <h3 className="resume__subtitle">Education</h3>
              </div>

              <ol className="resume__timeline-list">
                <li className="resume__timeline-item">
                  <h4 className="resume__timeline-item-title">
                    Miami Dade College
                  </h4>
                  <span>2024 - 2025</span>
                  <p className="resume__timeline-text">
                    Associate in Arts in Computer Science
                  </p>
                </li>

                <li className="resume__timeline-item">
                  <h4 className="resume__timeline-item-title">
                    Quality Leadership University / University of Louisville
                  </h4>
                  <span>2022 - 2024</span>
                  <p className="resume__timeline-text">
                    Bachelor of Science in Computer Science and Engineering
                    (Transferred Credits)
                  </p>
                </li>
              </ol>
            </div>

            <div className="resume__timeline">
              <div className="resume__title-wrapper">
                <h3 className="resume__subtitle">Experience</h3>
              </div>

              <ol className="resume__timeline-list">
                <li className="resume__timeline-item">
                  <h4 className="resume__timeline-item-title">
                    Freelance Contractor
                  </h4>
                  <span>
                    Apini Virtual • February 2024 — July 2024 • Remote
                  </span>
                  <div className="resume__timeline-text">
                    <ul>
                      <li>
                        Designed websites and created engaging social media
                        content, including posts and videos.
                      </li>
                      <li>
                        Scheduled posts using Meta Business Suite to maintain a
                        consistent online presence.
                      </li>
                      <li>
                        Handled customer inquiries, improving engagement and
                        retention.
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="resume__timeline-item">
                  <h4 className="resume__timeline-item-title">
                    Support Team, Administrative Assistant
                  </h4>
                  <span>
                    Código Infinito • March 2023 — February 2024 • Remote/Panama
                  </span>
                  <div className="resume__timeline-text">
                    <ul>
                      <li>
                        Chatted with customers over phone and email, solving
                        problems and keeping them happy.
                      </li>
                      <li>
                        Ran user tests and dug into research to make products
                        easier to use and clients more satisfied.
                      </li>
                      <li>
                        Made daily tasks like closing up, counting tips, and
                        handling petty cash way smoother.
                      </li>
                      <li>
                        Took charge of the company's social media game, making
                        our online presence available for everyone to see!
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="resume__timeline-item">
                  <h4 className="resume__timeline-item-title">
                    Residence Concierge & Office Tower Concierge
                  </h4>
                  <span>
                    PH TOC (The Ocean Club) • February 2022-August 2022 • Panama
                  </span>
                  <div className="resume__timeline-text">
                    <ul>
                      <li>
                        Managed package deliveries, visitor check-ins, and
                        schedules, keeping everything efficient.
                      </li>
                      <li>
                        Gave top-notch service to residents and office workers,
                        sorting concerns fast.
                      </li>
                      <li>
                        Got great deals on services, saving cash while keeping
                        operations on point.
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
