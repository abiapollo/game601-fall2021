using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallPhysics : MonoBehaviour
{
    public float speed = 5;
     // Start is called before the first frame update
    void Start()
    {
        StartOff();
    }

    public void StartOff()
    {
        Rigidbody rigidbody = GetComponent<Rigidbody>();

        float x = Random.Range(-10f, 10f);
        float y = Random.Range(-10f, -5f);

        Vector3 forceVector = new Vector3(x, y, 0);

        rigidbody.velocity = new Vector3(0,0,0);
        rigidbody.AddForce(forceVector.normalized * speed);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
