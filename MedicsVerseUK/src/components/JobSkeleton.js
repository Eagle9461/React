import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Card, CardBody } from "reactstrap";

function JobSkeleton() {
    return <>
        {Array(4).fill().map((c, i) =>
            <Card className="card2" key={i}>
                <CardBody>
                    <div className="row">
                        <div className="col-sm-12 col-md-9">
                            <Skeleton className="promoted" width="30%" />
                            <Skeleton className="card-title" width="70%" />
                            <Skeleton className="created-date-and-author" width="60%" />
                            <div className="row card-metadata-group">
                                <div className="col-sm-6">
                                    <Skeleton width='70%' height={20} />
                                    <Skeleton width="70%" height={20} />
                                </div>
                                <div className="col-sm-6">
                                    <Skeleton width="70%" height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-3">
                            <Skeleton className="create-company-logo" height={50} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        )}
    </>
}
export default JobSkeleton;