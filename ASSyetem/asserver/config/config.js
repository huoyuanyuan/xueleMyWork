/**
 * Created by Administrator on 2016/10/21 0021.
 */

module.exports = {
    db:"mysql://root:@localhost/asserver",
    dbtable:{
        admin:{
            admin_id:Number,
            admin_name:String,
            password:String,
            admin_remarks:String,
            admin_date:String
        },
        sessions:{
            session_id:String,
            expires: Number,
            data: String
        },
        plug_in:{
            plugIn_id:Number,
            plugIn_name:String,
            plugIn_remarks:String,
            plugIn_url:String
        },
        asplace:{
            place_id:Number,
            place_name:String,
            plugIn_id:Number,
            selector:String,
            place_state:Number,
            place_remarks:String,
            place_date:String
        },
        asplaceas:{
            ASplaceAS_id:Number,
            place_id:Number,
            AS_id:Number,
            AS_order:Number
        },
        astable:{
            AS_id:Number,
            AS_name:String,
            AS_link_url:String,
            AS_open_place:Number,
            AS_to_ASplace_id:Number,
            AS_picture_src:String,
            AS_backgroundcolor:String,
            AS_usetime:String,
            AS_remarks:String,
            AS_state:Number,
            AS_date:String
        },
        astarget:{
            target_id:Number,
            AS_id:Number,
            target_area_code:Number,
            target_area_name:String,
            target_role_id:Number,
            target_role_name:String
        }
    }
}