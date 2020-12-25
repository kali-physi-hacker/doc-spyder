import React from 'react';


// Component Imports Here
import DorctorImage1 from '../assets/img/doctors/doctor-thumb-01.jpg';
import DorctorImage2 from '../assets/img/doctors/doctor-thumb-02.jpg';
import DorctorImage3 from '../assets/img/doctors/doctor-thumb-03.jpg';
import DorctorImage4 from '../assets/img/doctors/doctor-thumb-04.jpg';
import DorctorImage6 from '../assets/img/doctors/doctor-thumb-06.jpg';

import SearchFeature1 from '../assets/img/features/feature-01.jpg';
import SearchFeature2 from '../assets/img/features/feature-02.jpg';
import SearchFeature3 from '../assets/img/features/feature-03.jpg';
import SearchFeature4 from '../assets/img/features/feature-04.jpg';

import Sepciality5 from '../assets/img/specialities/specialities-05.png';
import Sepciality4 from '../assets/img/specialities/specialities-04.png';
import Sepciality1 from '../assets/img/specialities/specialities-01.png';
import Sepciality3 from '../assets/img/specialities/specialities-03.png';

const Breadcrum = () => {
    return (
        <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Search</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">2245 matches found for : Dentist In Bangalore</h2>
                    </div>
                    <div className="col-md-4 col-12 d-md-block d-none">
                        <div className="sort-by">
                            <span className="sort-title">Sort by</span>
                            <span className="sortby-fliter">
									<select className="select">
										<option>Select</option>
										<option className="sorting">Rating</option>
										<option className="sorting">Popular</option>
										<option className="sorting">Latest</option>
										<option className="sorting">Free</option>
									</select>
								</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SearchDorctor = () => {
    return (
        <div>
            < Breadcrum />

			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

							 {/*Search Filter */}
							<div class="card search-filter">
								<div class="card-header">
									<h4 class="card-title mb-0">Search Filter</h4>
								</div>
								<div class="card-body">
								<div class="filter-widget">
									<div class="cal-icon">
										<input type="text" class="form-control datetimepicker" placeholder="Select Date" />
									</div>
								</div>
								<div class="filter-widget">
									<h4>Gender</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="gender_type" checked />
											<span class="checkmark"></span> Male Doctor
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="gender_type" />
											<span class="checkmark"></span> Female Doctor
										</label>
									</div>
								</div>
								<div class="filter-widget">
									<h4>Select Specialist</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" checked />
											<span class="checkmark"></span> Urology
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" checked />
											<span class="checkmark"></span> Neurology
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" />
											<span class="checkmark"></span> Dentist
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" />
											<span class="checkmark"></span> Orthopedic
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" />
											<span class="checkmark"></span> Cardiologist
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" />
											<span class="checkmark"></span> Cardiologist
										</label>
									</div>
								</div>
									<div class="btn-search">
										<button type="button" class="btn btn-block">Search</button>
									</div>
								</div>
							</div>
							{/*/Search Filter */}

						</div>

						<div class="col-md-12 col-lg-8 col-xl-9">

							 {/*Doctor Widget */}
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<a href="doctor-profile.html">
													<img src={DorctorImage1} class="img-fluid" alt="User Image" />
												</a>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
												<p class="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
												<h5 class="doc-department"><img src={Sepciality5} class="img-fluid" alt="Speciality" />Dentist</h5>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">(17)</span>
												</div>
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Florida, USA</p>
													<ul class="clinic-gallery">
														<li>
															<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
																<img src={SearchFeature1} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
																<img  src={SearchFeature2} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
																<img src={SearchFeature3} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
																<img src={SearchFeature4} alt="Feature" />
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> 98%</li>
													<li><i class="far fa-comment"></i> 17 Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> Florida, USA</li>
													<li><i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
												</ul>
											</div>
											<div class="clinic-booking">
												<a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
												<a class="apt-btn" href="booking.html">Book Appointment</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							 {/*/Doctor Widget */}

							 {/*Doctor Widget */}
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<a href="doctor-profile.html">
													<img src={DorctorImage2} class="img-fluid" alt="User Image" />
												</a>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
												<p class="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
												<h5 class="doc-department"><img src={Sepciality5} class="img-fluid" alt="Speciality" />Dentist</h5>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">(35)</span>
												</div>
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
													<ul class="clinic-gallery">
														<li>
															<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
																<img src={SearchFeature1} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
																<img  src={SearchFeature2} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
																<img src={SearchFeature3} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
																<img src={SearchFeature4} alt="Feature" />
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> 100%</li>
													<li><i class="far fa-comment"></i> 35 Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
													<li><i class="far fa-money-bill-alt"></i> $50 - $300 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
												</ul>
											</div>
											<div class="clinic-booking">
												<a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
												<a class="apt-btn" href="booking.html">Book Appointment</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*/Doctor Widget */}

							{/*Doctor Widget */}
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<a href="doctor-profile.html">
													<img src={DorctorImage3} class="img-fluid" alt="User Image" />
												</a>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><a href="doctor-profile.html">Dr. Deborah Angel</a></h4>
												<p class="doc-speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
												<p class="doc-department"><img src={Sepciality4} class="img-fluid" alt="Speciality"/>Cardiology</p>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">(27)</span>
												</div>
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
													<ul class="clinic-gallery">
														<li>
															<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
																<img src={SearchFeature1} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
																<img  src={SearchFeature2} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
																<img src={SearchFeature3} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
																<img src={SearchFeature4} alt="Feature" />
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> 99%</li>
													<li><i class="far fa-comment"></i> 35 Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
													<li><i class="far fa-money-bill-alt"></i> $100 - $400 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
												</ul>
											</div>
											<div class="clinic-booking">
												<a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
												<a class="apt-btn" href="booking.html">Book Appointment</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							 {/*/Doctor Widget */}

							 {/*Doctor Widget */}
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<a href="doctor-profile.html">
													<img src={DorctorImage4} class="img-fluid" alt="User Image" />
												</a>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><a href="doctor-profile.html">Dr. Sofia Brient</a></h4>
												<p class="doc-speciality">MBBS, MS - General Surgery, MCh - Urology</p>
												<p class="doc-department"><img src={Sepciality1} class="img-fluid" alt="Speciality" />Urology</p>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">(4)</span>
												</div>
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Louisiana, USA</p>
													<ul class="clinic-gallery">
														<li>
															<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
																<img src={SearchFeature1} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
																<img  src={SearchFeature2} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
																<img src={SearchFeature3} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
																<img src={SearchFeature4} alt="Feature" />
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> 97%</li>
													<li><i class="far fa-comment"></i> 4 Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
													<li><i class="far fa-money-bill-alt"></i> $150 - $250 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
												</ul>
											</div>
											<div class="clinic-booking">
												<a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
												<a class="apt-btn" href="booking.html">Book Appointment</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							 {/*/Doctor Widget */}

							 {/*Doctor Widget */}
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<a href="doctor-profile.html">
													<img src={DorctorImage6} class="img-fluid" alt="User Image" />
												</a>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><a href="doctor-profile.html">Dr. Katharine Berthold</a></h4>
												<p class="doc-speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
												<p class="doc-department"><img src={Sepciality3} class="img-fluid" alt="Speciality" />Orthopaedics</p>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">(52)</span>
												</div>
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Texas, USA</p>
													<ul class="clinic-gallery">
														<li>
															<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
																<img src={SearchFeature1} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
																<img  src={SearchFeature2} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
																<img src={SearchFeature3} alt="Feature" />
															</a>
														</li>
														<li>
															<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
																<img src={SearchFeature4} alt="Feature" />
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> 100%</li>
													<li><i class="far fa-comment"></i> 52 Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> Texas, USA</li>
													<li><i class="far fa-money-bill-alt"></i> $100 - $500 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
												</ul>
											</div>
											<div class="clinic-booking">
												<a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
												<a class="apt-btn" href="booking.html">Book Appointment</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							 {/*/Doctor Widget */}

							<div class="load-more text-center">
								<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
    );
}

export default SearchDorctor;