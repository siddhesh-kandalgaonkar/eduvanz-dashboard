import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
      </Head>
      
      <div className={styles.navigation}>
        <nav className="navbar navbar-expand-md  mb-5">
          <span className={styles.list}>
            <a href="#" className="navbar-brand">Dashboard</a>
          </span>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">


            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className={styles.list}>

                  <a href="#" className="nav-link">LOAN DASHBOARD</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}><a href="#" className="nav-link">INSURANCE DASHBOARD</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}>
                  <a href="#" className="nav-link">MY REWARDS</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}>
                  <a href="#" className="nav-link">CONTACT US</a>
                </span>

              </li>
              <li className="nav-item">
                <span className={styles.list}>
                  <a href="#" className="nav-link">LOGOUT</a>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-8 mb-4">
          <div className={styles.cardy}>

            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Start a new application</h5>
                <p class="card-text text-muted">Apply for a new loan application!</p>
                <span className={styles.btn}>
                  <a class="btn btn-sm active" href="#"> START NEW APPLICATION </a>
                </span>
              </div>
            </div>

          </div>

          <div className={styles.cardy}>

            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Get COVID-19 Cover</h5>
                <p class="card-text text-muted">Apply for a new COVID-19 cover for you and your family members</p>
                <span className={styles.btn}>
                  <a class="btn btn-sm active" href="#"> START NEW APPLICATION </a>
                </span>
              </div>
            </div>

          </div>
          <div>
            <h6>DISBURSED APPLICATIONS</h6>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr class={styles.tableheader}>
                  <th >APPLICATION ID</th>
                  <th >LOAN AMOUNT</th>
                  <th >EMI DUE DATE</th>
                  <th>NEXT PAYMENT AMT</th>
                  <th >STATUS</th>
                  <th >REPAY</th>

                </tr>

              </thead>
              <tbody>

                <tr>
                  <td colspan="6" class="brd-none pd0">
                    <div className={styles.cardy} class="card">
                      {/* <div class="card"> */}
                      <table class="table" >
                        <tbody>
                          <tr>

                            <td align="left">A234234</td>
                            <td align="center">Rs.10000</td>
                            <td align="center">05 Dec 21</td>
                            <td align="right">Rs. 9000</td>
                            <td align="right"><span class="badge badge-pill badge-info">EMI Running</span></td>
                            <td width="10%"><button type="button" class="btn btn-sm btn-outline-primary">Repay</button></td>

                          </tr>
                          <tr class="">

                            <td align="left">A234234</td>
                            <td align="center">Rs.10000</td>
                            <td align="center">05 Dec 21</td>
                            <td align="right">Rs. 9000</td>
                            <td align="right"><span class="badge badge-pill badge-info">EMI Running</span></td>
                            <td width="10%"><button type="button" class="btn btn-sm btn-outline-primary">Repay</button></td>

                          </tr>
                        </tbody>

                      </table>
                      {/* </div> */}
                    </div>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
          <div>
            <h6>PENDING APPLICATIONS</h6>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr class={styles.tableheader}>
                  <th >APPLICATION ID</th>
                  <th >LOAN AMOUNT</th>
                  <th >SUBMISSION DATE</th>
                  <th width="15%">TYPE OF LOAN</th>
                  <th >STATUS</th>
                  <th>EDIT/CONTINUE</th>

                </tr>

              </thead>
              <tbody>

                <tr>
                  <td colspan="6" class="brd-none pd0">
                    <div className={styles.cardy} class="card">
                      {/* <div class="card"> */}
                      <table class="table" >
                        <tbody>
                          <tr class="">

                            <td align="left">A234234</td>
                            <td align="center">Rs.10000</td>
                            <td align="center">05 Dec 21</td>
                            <td width="15%">College Loan</td>
                            <td width="10%"><span class="badge badge-pill badge-info">EMI Running</span></td>
                            <td width="10%"><button type="button" class="btn btn-sm btn-outline-primary">Edit</button></td>

                          </tr>
                          <tr class="">

                            <td align="left">A234234</td>
                            <td align="center">Rs.10000</td>
                            <td align="center">05 Dec 21</td>
                            <td width="15%" >College Loan</td>
                            <td width="10%"><span class="badge badge-pill badge-info">Document pending</span></td>
                            <td width="10%"><button type="button" class="btn btn-sm btn-outline-primary">Edit</button></td>

                          </tr>
                        </tbody>

                      </table>
                      {/* </div> */}
                    </div>
                  </td>


                </tr>





              </tbody>

            </table>
          </div>
        </div>


      </div>



    </div>
  )
}
